import mongoose from "mongoose";
import User from "./userModel";
// import moment from 'moment-timezone';

const reviewSchema = new mongoose.Schema({
    reviewBody: {
        type: String,
        trim: true
    },
    wroteAt: {
        type: String,
        // default: Intl.DateTimeFormat("en-GB", {year: "numeric", month: "short", day:"2-digit" ,hour: "numeric", minute: "numeric"}).format(Date.now())
    },
    updatedAt: String,
    
    rating: {
        type: Number,
        required: [true, "you have to rate with number between 1 to 5"],
        // enum: [1 , 2 , 3 , 4 , 5]
        min: 1,
        max: 5
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },

    // this is called in mongoose : Dynamic References via refPath, which is different from ref.
    // refPath used to populate from multiple collections based on the value of a property in the document,
    // refPah is more sophisticated alternative to ref.
    // goto: https://mongoosejs.com/docs/populate.html#dynamic-refpath
    reviewedModel: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "the _id must belong to a model of Bean or Roaster"],
        // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
        // will look at the `docModel` property to find the right model.
        refPath: "beanOrRoaster"
    },
    beanOrRoaster: {
        type: String,
        required: [true, "the review must have a model of Bean or Roaster"],
        enum: ["Bean", "Roaster"]
    }
     
},
{
    strictQuery: true
},
{
    /*
        Keep in mind that virtuals are not included in toJSON() and toObject() output by default.
        If you want populate virtuals to show up when using functions like Express' res.json() function
        or console.log(), set the virtuals: true option on your schema's toJSON and toObject() options.
    */

    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});


// ensure that the uniqueness of the roaster/bean-user cobination,
// so there are no duplicated reviews from the same user on the same doc:
reviewSchema.index({ reviewedModel: 1 , user: 1}, { unique: true});

reviewSchema.pre("save", function(next) {

    // const locale = navigator.language;
    // console.log(locale);
    
    const now = new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "short", day:"2-digit" ,hour: "numeric", minute: "numeric", second: "numeric"}).format(Date.now());    
    this.wroteAt = now;
    
    next();
});

reviewSchema.pre("findOneAndUpdate", function(next) {    
    const now = new Intl.DateTimeFormat("en-GB", {year: "numeric", month: "short", day:"2-digit" ,hour: "numeric", minute: "numeric", second: "numeric"}).format(Date.now());    
    // this.updatedAt = now; // this one won't work, this is a query hook so
    // this. keyword is refers to the query itself, it hasn't any access to the doc to modify it.
    // goto: https://mongoosejs.com/docs/middleware.html#notes
        // " You cannot access the document being updated in pre('updateOne') or 
        //  pre('findOneAndUpdate') query middleware. If you need to access the document that will be updated,
        //  you need to execute an explicit query for the document. "

    this.set({ updatedAt: now });
    

    next();
});

reviewSchema.pre(/^find/, function(next) {
    // this.populate({ path: "user", select: "username image"}).populate({ path: "reviewedModel", select: "nameEn nameAr"});
    // 👆🏼👆🏼 this will make the reviewedModel : null in the response body
    this.populate({ path: "user", select: "username image"});
    next();
});

reviewSchema.methods.confirmUserAuthority = function(commingUserId) {
    console.log("confirmUserAuthority");
    console.log(this.user.id);
    console.log(commingUserId);
    
    if(this.user.id === commingUserId) return true;
    return false;
}

// static❌ staticS ✅ METHOD => its this. keyword refers to the current Model
reviewSchema.statics.calculateAvgRatings = async function(modelId, modelName, isDelete = false) {    
    // the reason why we used static method her, and not an instance one, because
    // we need aggregate in order to apply the logic of calculaion the avgRating
    // and aggregate cane be use ONLY ON THE MODEL ITSELF, not on doc or query.
    const stats = await this.aggregate([
        {
            // 1- Select all the reviews of the passed model id:
            // $match: {model : modelId}
            $match: {reviewedModel : modelId}
        },
        {
            // 2- Calculate :
            $group: {
                _id: "$reviewedModel",
                // add 1 for each review documents we have after the matching step, (عشان نحسب الأفريج لازم نقسم على العدد الكُلي)
                nRatings: {$sum: 1},
                avgRatings: {$avg: "$rating"} // the given rating by the user in each review
            }

        },
    ]);

    console.log("stats are",stats);
    

    let thisModel = await mongoose.model(modelName).findById(modelId);

    if(stats.length > 0) { // in case there is a new/updated review :
        console.log("inside stats if");
        thisModel.ratingsQuantity = stats[0].nRatings;
        thisModel.ratingsAverage = stats[0].avgRatings;
    }

    else { // in case all the review were deleted and there are no revies on this model :
        console.log("inside stats else");
        
        thisModel.ratingsQuantity = 0;
        thisModel.ratingsAverage = 0;
    }

    thisModel.isDelete = isDelete;    
    await thisModel.save({ validateBeforeSave: false });
    /*
        لأن ميثود إز ديفايند غير متوفرة إلا في البري سيف هوك كان لازم أغير نوع الهوك من أبديت زي ما كنت حاطته ل سيف
        و جيت هنا سويت دوكيومنت من المودل عشان أقدر أوصل للفيلدز حقت ذي الدوكيومنت و أغير قيمتها 
        بدون ما أستخدم فايند باي آيدي آند أبديت لأنها بكذا راح تغير القيمة و تخلص وما راح يدخل شرط الإز موديفايد
        لأنه بيصير دائمًا صحيح لأنه مو شايف إن هالفيلد تعدل
        غير كذا أحتاج تكون دوكيومنت عشان أستدعي ميثود سيف عليها
        لأن ميثود سيف غير متاحة على المودل, فقط الوكيومنت
        و عطلت الفاليديشن لأني ما أحتاج فاليديشن في هالحالة
    */

}
/*  ##################### THE OLD WAY #####################*/
// THIS PRE(/^findOneAnd/) IS FOR DEALING WITH UPDATING/DELETING REVIEWS
// reviewSchema.pre(/^findOneAnd/, async function(next) {
// console.log("pre(/^findOneAnd/");

//     // this is a query pre() hook... then how to get access to the doc to update/delete the data ?
//     // we know that the processed query gives us all the matched doc right ? so we're baiscally going to excute the query and save the result:
//     // const reviewDoc = await this.findOne();
//     this.reviewDoc = await this.findOne();
//                             // In mongoose, when you use findOne() in a pre or post hook middleware, 
//                             // Mongoose automatically sets the query conditions based on
//                             // the document being processed. You don't need to specify the ID explicitly
//                             // because Mongoose uses the values from the current document to create the query.

//     // we've successfullt get the doc, but here is another probelm.. this a pre() hook
//     // so the changes that is made on the review (whether it's updating or deleting)
//     // we can't access it to reCalculate the average because it's not saved to the db yet, what to do ?
//     // THE SOLUTION is to create a new query post(/^findOneAnd/) hook and pass the reviewDoc variable to it.
//     // HOW TO SAVE VARIABLES IN HOOKS? just replace the const/let to the magicak keywor this.
//     next();
// });

reviewSchema.post(/^findOneAnd/, async function(reviewDoc) {
    // await this.reviewDoc.constructor.calculateAvgRatings(this.reviewDoc.reviewedModel, this.reviewDoc.beanOrRoaster);
    // 'this' keyword is a Query object
    // the 'Query' object has a 'model' property

    const isDelete = this.op.includes("Delete"); 
    console.log(isDelete);
       
    await this.model.calculateAvgRatings(reviewDoc.reviewedModel, reviewDoc.beanOrRoaster, isDelete);
});


/*  ##################### THE NEW WAY #####################*/
// reviewSchema.post(/^findOneAnd/, async function(reviewDoc){
//     // post() hook will get the doc as the first argument. 
//     // So the post() hook will get the updated review as an argument.
//     // So you can just do :
//     await reviewDoc.constructor.calculateAvgRatings(reviewDoc.reviewedModel, reviewDoc.beanOrRoaster);

// });
// THIS POST(SAVE) IS FOR DEALING WITH NEW REVIEWS
// we are going to call the above static method using this md whenever a new review is created:
reviewSchema.post("save", function() { // no need to use async-await in post() hooks -i think- and no need for next() -iam sure-
    // because the calculateAvgRatings() is a static method that can only be used on the MODEL
    // and because this is a pre("save") hook that only points to the current doc,
    // writing this.calculateAvgRatings() is NOT GOING TO WORK
    // because this. is pointing to the doc and calculateAvgRatings() is only available on the Model
    // so what to do ?
    // we can go around this by writing this. -means this doc- constructor -the model that this doc was created from
    // then the calculateAvgRatings()
    
    // so it's:Review.calculateAvgRatings()    
    this.constructor.calculateAvgRatings(this.reviewedModel, this.beanOrRoaster);
                                // the current doc's model type that is being reviewd and rated with its id.
});

mongoose.set("sanitizeFilter", true);
const Review = mongoose.models?.Review || mongoose.model("Review", reviewSchema);

export default Review;