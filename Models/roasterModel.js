import mongoose from "mongoose";
import slugify from "slugify";
import Ranking from "./rankingModel";
import Review from "./reviewModel";
// import Bean from "./beanModel";
import User from "./userModel";

const RoasterSchema = new mongoose.Schema(
  {
    nameEn: {
      type: String,
      required: [true, "Any roaster must have a name !"], // validator
      unique: true,
      trim: true,
    },
    nameAr: {
      type: String,
      required: [true, "a roaster must have a nameAr"],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    cityEn: {
      type: String,
      required: [true, "a roaster must have a city"],
      trim: true,
    },
    cityAr: {
      type: String,
      required: [true, "a roaster must have a cityAr"],
      trim: true,
    },
    year: {
      type: Number,
      default: "--",
    },
    image: String,
    website: {
      type: String,
      unique: true,
      trim: true,
    },
    instagram: {
      type: String,
      unique: true,
      trim: true,
    },
    ranking: {
      type: Number,
      defualt: 0,
    },
    ratingsAverage: {
      type: Number,
      min: [1, "rating must be 1 to 5"], // works with dates too .
      max: [5, "rating must be 1 to 5"], // works with dates too .
      set: (value) => Math.round(value * 10) / 10, // 4.66666 * 10 => 46.6666 => round => 47 / 10 => 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    ratingsQuantityThisMonth: {
      type: Number,
      default: 0
    },
    ratingsQuantityLastMonth: {
      type: Number,
      default: 0
    },
    locations: [
      {
        type: {
          type: String,
          default: "Point",
          enum: ["Point"], // a way to restrict the values that a particular field can have
        },
        coordinates: [Number], //[lng, lat]
        branchEn: String,
        branchAr: String,
      },
    ],
    hasMaster : {
      type: Boolean,
      default: false
    },
    master: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      default: null
    }
    // beans: [{ 
    //   type: mongoose.Schema.Types.ObjectId, 
    //   ref: 'Bean' 
    // }],
    // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
    // I commented this for the same reason that made me comment myReviews in User
  },
  {
    // The strict option does apply to updates. The strictQuery option is just for filtering the queries.
    // strict: true, The strict option is enabled by default, ensures that values passed to our model constructor that were not specified in our schema do not get saved to the db.
    strictQuery: true,
  },

  // Schema Options:
  {
    toJSON: { virtuals: true }, // <-- include virtuals in `JSON.stringify()` which is the output .
    toObject: { virtuals: true } // means I want the virtuals to be outputed as an obj, So `console.log()` and other functions that use `toObject()` include virtuals

  }
);


RoasterSchema.index({ratingsAverage: -1, ratingsQuantity: 1});
RoasterSchema.index({slug: 1});
RoasterSchema.index({cityAr: 1});
RoasterSchema.index({cityEn: 1});
RoasterSchema.index({"locations.coordinates": "2dsphere"});

RoasterSchema.virtual("beans", {
  ref: "Bean",
  localField: "_id",
  foreignField: "roaster"
});

RoasterSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "reviewedModel"
});

RoasterSchema.pre("save", function (next) {
  this.slug = slugify(this.nameEn, {lower: true});
  next();
});

RoasterSchema.methods.isMyMaster = function(userId) {
  return this.master.id === userId;
}

RoasterSchema.statics.setRanking = async function() {
  console.log("inside set ranking");
  
  // const roasters = await this.find( { ratingsQuantity: { $gt: 0} } );
  const roasters = await this.aggregate([{ $match: {ratingsQuantity : { $gt: 0} } }]);
  console.log(roasters.length);
  
  const sortedRoasters = roasters.sort( (a,b) => {    
    const ratingAverageComparison = b.ratingsAverage - a.ratingsAverage;
    // If ratingsAverage is the same, sort by ratingsQuantity in ascending order
    return ratingAverageComparison !== 0 ? ratingAverageComparison : a.ratingsQuantity - b.ratingsQuantity;
  });  

  console.log(sortedRoasters);
  

  await Promise.all(
    sortedRoasters.map( async(roaster, index) => {
      console.log("inside promise all ranking", roaster._id)
      await Ranking.updateOne({ modelId: roaster._id, model: "Roaster" }, // it's doc._id when the array is the result of aggregation and not find methods.
                              { $set: {rank: index + 1}}, { upsert: true });
                              /*
                              upsert: true is an option in the updateOne query.
                              The upsert option stands for "update or insert." If set to true,
                              it means that if no document matches the query, a new document will be inserted.
                              If a matching document exists, it will be updated
                              */ 
    })
  );

  await Promise.all(
    sortedRoasters.map( async(roaster, index) => {
      await this.findByIdAndUpdate(roaster._id, {ranking: index + 1})
    })
  );  
  
}

// this doc md if for getting the most rated roaster this mont
RoasterSchema.pre("save", async function(next) {  
console.log("pre save ratingsQ is mody", this.isModified("ratingsQuantity"));

  // 1- Guard statement :
  if(!this.isModified("ratingsQuantity")) return next();
  console.log("pre save after guard clause");
  // 2- Got throught the Guard ? Check in which day of the month we're in
  // const today = new Date().toJSON() // to make it a string in order to use strings' methods
  // .slice(0, 10). // git rid of the time information
  // split("-")[2]; // splite the date into year, month and day and get the only day.
  
  // from here: https://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery
  const today = new Date();
  // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59,59);
  // Setting day parameter to 0 means one day less than first day of the month which is last day of the previous month.
  
  // console.log(`lastDayOfMonth ${lastDayOfMonth} \n today ${today}`);

  if(today < lastDayOfMonth) this.isDelete ? --this.ratingsQuantityThisMonth : ++this.ratingsQuantityThisMonth;
  // this means it's not the time to reset the counter of this month ratingsQuantity.

  console.log(this.ratingsQuantityThisMonth);
  
  next();
});

RoasterSchema.post("save", async function() {
  console.log("before set ranking");
  
  // after setting the ratingsQuantity in pre(save), let's recalculate the ranking:
  await this.constructor.setRanking();

});

RoasterSchema.post("findOneAndDelete", async function(deletedDoc) {
  console.log("inside post(delete)");
  
  console.log(deletedDoc.nameEn, deletedDoc.id);
  await Ranking.deleteOne(deletedDoc.id);
  console.log("now check Ranking after delete");
  await Review.deleteMany({ reviewedModel: deletedDoc.id})
  
});



// mongoose.set("sanitizeFilter", true);
mongoose.set("sanitizeFilter", false); // I changed becuase of the getTopRoaster() was throwing this Error: Cast to Number failed for value "{ '$lte': 10 }" (type Object) 
const Roaster = mongoose.models.Roaster || mongoose.model("Roaster", RoasterSchema);

export default Roaster;