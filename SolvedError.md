- Next.js:

    **Error: Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.**
    - i got this error because i was trying to invoke getCurrentUser(); which it has a "server-only" function inside the   <QuickAccess/> comp. the comp itself is a SC so there was nothing worng with it, the wrong thing I've done is calling it
    inside the CC <Header/>! because it is a styled-component, 
    *THE SOLUTION* was to make the <Header/> accepts the <QuickAccess/> as its children.


- mongoose: