import mongoose from "mongoose";
import Bean from "./beanModel";
// import Roaster from "./roasterModel";

const rankingSchema = new mongoose.Schema({
    modelId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "model"

    },
    model: {
        type: String,
        enum: ["Bean", "Roaster"]
    },
    rank: Number,
},
{
    strictQuery: true,
    strictPopulate: false
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

rankingSchema.index({rank: -1, model: 1});

rankingSchema.pre(/^find/, function(next) {
    // this.populate({path: "modelId", select: "nameEn nameAr image ratingsAverage roaster slug"});
    this.populate({path: "modelId"});
    next();
});

// mongoose.set("sanitizeFilter", true);
const Ranking = mongoose.models?.Ranking || mongoose.model("Ranking", rankingSchema);

export default Ranking;
