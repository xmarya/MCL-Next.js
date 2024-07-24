- Next.js:

  **Error: Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.**

  - i got this error because i was trying to invoke getCurrentUser(); which it has a "server-only" function inside the <QuickAccess/> comp. the comp itself is a SC so there was nothing worng with it, the wrong thing I've done is calling it
    inside the CC <Header/>! because it is a styled-component,
    _THE SOLUTION_ was to make the <Header/> accepts the <QuickAccess/> as its children.

- mongoose:

  **TypeError: Cannot read properties of undefined (reading 'map') although fetched data printed by console.log**

  - This error happens when the data is _NOT An ARRAY_ and for a high chance the data (response.results[0]) is an object instead of an array.
