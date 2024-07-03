import cron from "node-cron";

// export const getMostRatedLastMonth = async (Model) => {
//   const topRated = await Model.aggregate([
//       { $match: 
//           { 
//               ratingsQuantityLastMonth: { $gt: 0 }, // to remove all the roatsers that haven't been rated this month
//           }
//       },
//       {
//           $group: {
//               _id: "$ratingsQuantityLastMonth",
//               docs: { $push: "$$ROOT" }
//               // $$ROOT is a system variable that represents the root document currently being processed 
//               // in the pipeline. It allows you to reference the entire document within the aggregation pipeline.
//           }
//       },
//       {
//           $sort: { _id: -1 }
//       },
//       {
//           $limit: 1 // Limit to the first group (max value group)
//       },
//       {
//           $unwind: "$docs" // disassemble the array of documents to its original format, object(s).
//       },
//       {
//           $replaceRoot: { newRoot: "$docs" } // Replace the root with the original documents
//       }
//   ]);

//   return topRated;
// }

export const udpateMonthlyRating = (request,response,next) => {       
    
  const now = new Date();
  const thisMonth = now.getMonth() + 1; // January's index in node-cron is 1, not like Date class which its index is 0

/*
                              # ┌────────────── second (optional) 0-59
                              # │ ┌──────────── minute 0-59
                              # │ │ ┌────────── hour 0-23
                              # │ │ │ ┌──────── day of month 1-31
                              # │ │ │ │ ┌────── month 1-12 (or names)
                              # │ │ │ │ │ ┌──── day of week 0-7 (or names, 0 or 7 are sunday)
                              # │ │ │ │ │ │
                              # │ │ │ │ │ │
                              # * * * * * *
*/
  cron.schedule(`0 0 0 1 ${thisMonth} *`, async() => {
    await Roaster.updateMany({}, [
        {
          $set: {
              ratingsQuantityLastMonth: "$ratingsQuantityThisMonth",
          }
        },
        {
          $set: {
              ratingsQuantityThisMonth: 0,
          }
        }
      ]
    );
      
      await Bean.updateMany({}, [
        {
          $set: {
              ratingsQuantityLastMonth: "$ratingsQuantityThisMonth",
          }
        },
        {
          $set: {
              ratingsQuantityThisMonth: 0,
          }
        }
      ]
    );
      // the empty condition matches any document
      // Note updateMany will not fire update middleware. Use pre('updateMany') and post('updateMany') instead.      
    },{
      name: 'update counter'
    });

  // task.start();

//     const tasks = cron.getTasks();

// for (let [key, value] of tasks.entries()) {
//   console.log("key", key)
//   console.log("value", value)
// }

  next();
};
