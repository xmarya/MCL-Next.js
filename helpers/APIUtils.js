import cron from "node-cron";
import Roaster from "@/Models/roasterModel";
import Bean from "@/Models/beanModel";

export const APIQuery = (request, _, model) => {
  let query = JSON.stringify({ ...request.query });

  //The ? sign means that the previous character, in this case the 'e' letter could or not exists.
  query = query.replace(/\b(gte?|lte?)\b/g, (match) => `$${match}`);
  // const roasters = await Roaster.find(query).select("-__v");
  /* this lin eabove won't work out for two reasons:
        1- because the query right now is a normal javascript object as we've converted it 
        using JSON.stringify, so we need to return it to the JSON format using JSON.parse().  
        
        2- it is awating the find(query) which will make the find to excute it and bring the finel result
        while we just want to store the query and complete the process on it (sorting, pagination, limiting).
    */
  query = model.find(JSON.parse(query));

  // SORTING AFTER FETCHING THE DATA FROM THE DB:
  if (request.query.sort) {
    const sortBy = request.query.sort.split(",").join(" ");
    query = query.sort(sortBy); // sort() is one of query prototype methods in mongoose.
  } else {
    // query = query.sort("ranking -ratingsQuantity");
    query = query.sort("EnAr");
  }

  // LIMITTING THE FIELDS:
  if (request.query.fields) {
    const limitFields = request.query.fields.split(",").join(" ");
    query.select(limitFields);
  } else {
    query.select("-__v");
  }

  // PAGINATION AND LIMITING THE #RESULTS:
  const page = +request.query.page || 1;
  const limitResultPerPage = +request.query.limit || 100;
  // if I want page 3 (from element 31 - 46),
  // then it will be 2 * 15 = 30 elements to skip .
  const skip = (page - 1) * limitResultPerPage;

  query = query.skip(skip).limit(limitResultPerPage);

  return query;
};

export const getTopTen = async (request, _, next) => {
  request.query.sort = "ranking,-ratingsQuantity";
  request.query.limit = 10;
  request.query.fields = "image,nameEn,nameAr,ranking,ratingsQuantity";
  next();
};

export const getMostRatedLastMonth = async (Model) => {
  const topRated = await Model.aggregate([
      { $match: 
          { 
              ratingsQuantityLastMonth: { $gt: 0 }, // to remove all the roatsers that haven't been rated this month
          }
      },
      {
          $group: {
              _id: "$ratingsQuantityLastMonth",
              docs: { $push: "$$ROOT" }
              // $$ROOT is a system variable that represents the root document currently being processed 
              // in the pipeline. It allows you to reference the entire document within the aggregation pipeline.
          }
      },
      {
          $sort: { _id: -1 }
      },
      {
          $limit: 1 // Limit to the first group (max value group)
      },
      {
          $unwind: "$docs" // disassemble the array of documents to its original format, object(s).
      },
      {
          $replaceRoot: { newRoot: "$docs" } // Replace the root with the original documents
      }
  ]);

  return topRated;
}

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
