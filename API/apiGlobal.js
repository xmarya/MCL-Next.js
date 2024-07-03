import { dbConnection } from "@/helpers/dbConnection";

export async function getMostRatedLastMonth(Model) {
  await dbConnection();
  const topRated = await Model.aggregate([
    {
      $match: {
        ratingsQuantityLastMonth: { $gt: 0 }, // to remove all the roatsers that haven't been rated this month
      },
    },
    {
      $group: {
        _id: "$ratingsQuantityLastMonth",
        docs: { $push: "$$ROOT" },
        // $$ROOT is a system variable that represents the root document currently being processed
        // in the pipeline. It allows you to reference the entire document within the aggregation pipeline.
      },
    },
    {
      $sort: { _id: -1 },
    },
    {
      $limit: 1, // Limit to the first group (max value group)
    },
    {
      $unwind: "$docs", // disassemble the array of documents to its original format, object(s).
    },
    {
      $replaceRoot: { newRoot: "$docs" }, // Replace the root with the original documents
    },
  ]);

  return topRated;
}
