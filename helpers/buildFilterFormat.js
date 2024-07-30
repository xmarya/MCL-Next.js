
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
      // filter[key] = { $in: ["65966a2e12a0c15557792780", "65966a2e12a0c1555779277b"]};
    }

    return {filter, sortBy};
}

export {buildFilterFormat, destructSearchParams};