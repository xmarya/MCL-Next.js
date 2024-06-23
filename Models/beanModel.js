import mongoose from "mongoose";
import slugify from "slugify";
import Ranking from "./rankingModel";
import Review from "./reviewModel";

const beanSchema = new mongoose.Schema(
  {
    nameEn: {
      type: String,
      required: [true, "name is required"],
    },
    nameAr: {
      type: String,
      required: [true, "nameAr is required"],
    },
    slug: {
      type: String,
      unique: true,
    },
    originEn: {
      type: String,
      required: [true, "origin is required"],
    },
    originAr: {
      type: String,
      required: [true, "originAr is required"],
    },
    varietyEn: {
      type: String,
      required: [true, "variety is required"],
    },
    varietyAr: {
      type: String,
      required: [true, "varietyAr is required"],
    },
    typeOfProcessEn: {
      type: String,
      required: [true, "typeOfProcess is required"],
    },
    typeOfProcessAr: {
      type: String,
      required: [true, "typeOfProcessAr is required"],
    },
    notesEn: {
      type: [String],
      required: [true, "notes is required"],
    },
    notesAr: {
      type: [String],
      required: [true, "notesAr is required"],
    },
    drinkTypeEn: {
      type: [String],
      required: [true, "drinkType is required"],
    },
    drinkTypeAr: {
      type: [String],
      required: [true, "drinkTypeAr is required"],
    },
    image: String,

    ranking: {
      type: Number,
      defualt: 0,
    },
    ratingsAverage: {
      type: Number,
      default: 0.0,
      min: [1, "rating must be 1 to 5"], // works with dates too .
      max: [5, "rating must be 1 to 5"], // works with dates too .
      set: (value) => Math.round(value * 10) / 10, // 4.66666 * 10 => 46.6666 => round => 47 / 10 => 4.7
    },
    ratingsQuantity: {
      type: Number,
      default:0,
    },
    ratingsQuantityThisMonth: {
      type: Number,
      default: 0
    },
    ratingsQuantityLastMonth: {
      type: Number,
      default: 0
    },
    isRare: {
      type: Boolean,
      default: false,
    },
    tagsEn: [String],
    tagsAr: [String],

    roaster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roaster",
      required: [true, "roaster is required"],
    },
    // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
    // I commented this for the same reason that made me comment myReviews in User
  },
  {
    strictQuery: true,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true} // means I want the virtuals to be outputed as an obj, So `console.log()` and other functions that use `toObject()` include virtuals

  }
);
beanSchema.index({ratingsAverage: -1, ratingsQuantity: 1});
beanSchema.index({drinkTypeEn:1, ratingsAverage : -1});
beanSchema.index({drinkTypeAr:1, ratingsAverage : -1});
beanSchema.index({slug: 1});

beanSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "reviewedModel"
});

beanSchema.pre("save", function(next) {
  console.log("here is pre(save) slug, this may cuase an error");
    this.slug = slugify(this.nameEn, {lower: true}) ;
    // this.slug = slug.concat("-", this.roaster.name);

    next();
});



beanSchema.statics.setRanking = async function() {  
  const beans = await this.aggregate([{ $match: {ratingsQuantity : { $gt: 0} } }]);
  const sortedBeans = beans.sort( (a,b) => {
    const ratingAverageComparison = b.ratingsAverage - a.ratingsAverage;
    // If ratingsAverage is the same, sort by ratingsQuantity in ascending order
    return ratingAverageComparison !== 0 ? ratingAverageComparison : a.ratingsQuantity - b.ratingsQuantity;
  });

  await Promise.all(
    sortedBeans.map( async(bean, index) => {
      await Ranking.updateOne({ modelId: bean._id, model: "Bean" },
                              { $set: {rank: index + 1}}, { upsert: true });
    })
  );

  await Promise.all(
    sortedBeans.map( async(bean, index) => {
      await this.findByIdAndUpdate(bean._id, {ranking: index + 1})
    })
  );  
}

beanSchema.pre("save", async function(next) {

  // 1- Guard statement :
  if(!this.isModified("ratingsQuantity")) return next();

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

  // today < lastDayOfMonth ? this.ratingsQuantityThisMonth = this.ratingsQuantityThisMonth + 1 : ratingsQuantityThisMonth = 0; 
  if(today < lastDayOfMonth) this.isDelete ? this.ratingsQuantityThisMonth-- : this.ratingsQuantityThisMonth++;
  // this means it's not the time to reset the counter of this month ratingsQuantity.

  next();
});

beanSchema.post("save", async function() {  
  // after setting the ratingsQuantity, let's recalculate the ranking:
  await this.constructor.setRanking();
});

beanSchema.post("findOneAndDelete", async function(deletedDoc) {
  console.log("inside post(delete)");
  
  console.log(deletedDoc.nameEn, deletedDoc.id);
  await Ranking.deleteOne(deletedDoc.id);
  console.log("now check Ranking after delete");
  await Review.deleteMany({ reviewedModel: deletedDoc.id})
  
});

// mongoose.set("sanitizeFilter", true);
mongoose.set("sanitizeFilter", false); // I changed becuase of the getTopBeans() was throwing this Error: Cast to Number failed for value "{ '$lte': 10 }" (type Object) 
const Bean = mongoose.models?.Bean || mongoose.model("Bean", beanSchema);

export default Bean;