import { dbConnection } from "@/helpers/dbConnection";
import Ranking from "@/Models/rankingModel";

export async function getTopTen(model, limit = 10) {
  await dbConnection();
  const topTen = await Ranking.find({ model })
    .sort("rank")
    .limit(limit)
    .select("-__v");
  // if(model === "Bean") await mongoose.model(model).populate("roaster")
  
  return JSON.parse(JSON.stringify(topTen));
}
