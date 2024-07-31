- Next.js:

  **Error: Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.**

  - i got this error because i was trying to invoke getCurrentUser(); which it has a "server-only" function inside the <QuickAccess/> comp. the comp itself is a SC so there was nothing worng with it, the wrong thing I've done is calling it
    inside the CC <Header/>! because it is a styled-component,
    _THE SOLUTION_ was to make the <Header/> accepts the <QuickAccess/> as its children.

- mongoose:

  **TypeError: Cannot read properties of undefined (reading 'map') although fetched data printed by console.log**

  - This error happens when the data is _NOT An ARRAY_ and for a high chance the data (response.results[0]) is an object instead of an array.

  **After changing $in into $or + $regex inside the destructSearchParams() helper function to make it retrieves all the phrases that CONTAIN the word within, not just looking for the EXACT word to match. I got
  errorResponse: {
    ok: 0,
    errmsg: 'unknown operator: $or',
    code: 2,
    codeName: 'BadValue'
  }
  **

  - This was the $or operator is not being used correctly. When constructing a query with multiple $regex conditions for a single field, you need to use an array to group them correctly.
  the code was :
        for (const [key, value] of Object.entries(searchParams)) {
          // Split the value by comma
          const valuesArray = value.split(',');
          // Use $or with $regex for each value in the array
          filter[key] = {
            $or: valuesArray.map(value => ({ $regex: value}))
         };
        }
  
  _THE SOLUTION_ was:
    1- Use the $or operator at the top level of the query.
    2- Construct an array of conditions, each containing the field and its respective $regex query.
      const filter = {
        $or: []
      };
      
      for (const [key, value] of Object.entries(searchParams)) {
        // Split the value by comma
        const valuesArray = value.split(',');
        // Use $or with $regex for each value in the array
        valuesArray.forEach( value =>
        filter.$or.push( {[key]: { $regex: value} } ));
      }
