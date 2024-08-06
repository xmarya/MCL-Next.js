
function buildFilterFormat(filterOpts) {
  
    let formattedFilter = [];
    filterOpts.map(opt => formattedFilter.push(opt.value));
   
    return formattedFilter;
}

// for the SCs that reads the searchParams
function destructSearchParams(searchParams) {
    let sortBy;
    let page;

    if (searchParams.hasOwnProperty("sortBy")) {
      sortBy = searchParams.sortBy;
      delete searchParams.sortBy;
    }

    if (searchParams.hasOwnProperty("page")) {
      page = +searchParams.page;
      delete searchParams.page;
    }

    const filter = {};
    for (let [key, value] of Object.entries(searchParams)) {
      const valuesArray = value.split(',');
      // const queryValue = key === "roaster" ? { $in: valuesArray} : { $regex: valuesArray.join('|')};  // Join with '|' to match any
      /*
      // Split the value by comma and trim any extra spaces
      filter[key] = { $in: value.split(',')};
      
      // Split the value by comma
      // Use $or with $regex for each value in the array
      // filter[key] = {
        //   $or: valuesArray.map(value => ({ $regex: value}))
        // };
        */
      let query;
      
      switch (key) {
        case "roaster":
          query = { $in: valuesArray};
          break;

        case "ratingsAverage":
          // query = {$in: valuesArray.map(Number)} // this trick is from :https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
          const ratings = valuesArray.map(value => {
            const minRating = Number(value);
            const maxRating = minRating + 1;
            // the correct format => 
              //$or: [ 
                // { ratingsAverage: { $gte: 4, $lt: 5 } },
                // { ratingsAverage: { $gte: 0, $lt: 3 } }
                //]
            // note that the $or operator doesn't have a field before it, the field is inside it
            return {ratingsAverage: { $gte: minRating, $lt: maxRating }};
          });

          key = "$or";
          query = ratings;
          // console.log("$or:",ratings);
          console.log("qur",query);
          break;

        default:
          query = { $regex: valuesArray.join('|')};  // Join with '|' to match any
          break;
      }
        
      filter[key] = query;
    }

    return {filter, sortBy, page};
}

// only for db APIs uses
function intoFilteringArray(dataObject, field, splitOption) {

  let data = dataObject.map(obj => obj[field]);

  // converting all of the arrays into ONE-UNIQUE-VALUES array (.flat() to flatten an array ...new Set() to get its unique values into a new array)
  data = [...new Set(data.flat(1).sort())];
  
  // building the format for Select component:
  // {value: for db query purposes, label: for the displayed text in the select menu}
  data = data.map(option => ({value: option, label: option}));

  
  return data;

}

export {buildFilterFormat, destructSearchParams, intoFilteringArray};