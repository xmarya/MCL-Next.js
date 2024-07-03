import { dbConnection } from "@/helpers/dbConnection";
import Ranking from "@/Models/rankingModel";
import mongoose from "mongoose";

export async function getTopTen(model, limit = 10) {
  await dbConnection();
  const topTen = await Ranking.find({ model })
    .sort("rank")
    .limit(limit)
    .select("-__v");
  // if(model === "Bean") await mongoose.model(model).populate("roaster")

  return topTen;
}
