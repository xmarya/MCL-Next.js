
function buildFilterFormat(filterOpts) {
  
    let formattedFilter = [];
    filterOpts.map(opt => formattedFilter.push(opt.value));
   
    return formattedFilter;
}

function destructSearchParams(searchParams) {
    let sortBy;

    if (searchParams.hasOwnProperty("sortBy")) {
      sortBy = searchParams.sortBy;
      delete searchParams.sortBy;
    }
  
    const filter = {};
    for (const [key, value] of Object.entries(searchParams)) {
      // Split the value by comma and trim any extra spaces
      filter[key] = { $in: value.split(',')};
    }

    return {filter, sortBy};
}

function intoFilteringArray(dbObject, field, splitOption) {

  let data = dbObject.map(obj => obj[field]);

  // converting all of the arrays into ONE-UNIQUE-VALUES array (.flat() to flatten an array ...new Set() to get its unique values into a new array)
  data = [...new Set(data.flat(1).sort())];
  
  // building the format for Select component:
  // {value: for db query purposes, label: for the displayed text in the select menu}
  data = data.map(option => ({value: option, label: option}));

  
    return data;

}

export {buildFilterFormat, destructSearchParams, intoFilteringArray};