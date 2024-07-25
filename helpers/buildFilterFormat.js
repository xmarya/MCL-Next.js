
function buildFilterFormat(filterOpts) {

    let formattedFilter = [];
    
    filterOpts.map(opt => formattedFilter.push(opt.label));
    console.log(formattedFilter);

    
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

export {buildFilterFormat, destructSearchParams};