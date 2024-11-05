"use client"

import { useEffect } from "react";
import { useState } from "react";

export default function useWindowSize() {

    /* OLD CODE (leaved for reference): 
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
    in Next.js, initialising the value using window at the render didn't work because it's related to the client
    despite the fact that I had already marked the Header and Hamburger components with "use client"
    so eventually I removed it.

    chatGPT answer: 👇🏻
        The issue here is that window is not available on the server side, 
        as Next.js renders components server-side by default, even in components marked with "use client". 
        This is causing the ReferenceError: window is not defined when your hook tries to 
        access window.innerWidth and window.innerHeight on the initial render. 
        The error disappears when you remove the initial values in useState, 
        because it no longer tries to reference window directly.
    */

   const [windowSize, setWindowSize] = useState({});

    useEffect(function() {
        function getWindowSize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        if(typeof window !== "undefined") {

            window.addEventListener("resize", getWindowSize);

            getWindowSize();

            return () => window.removeEventListener("resize", getWindowSize);
        }
    }, []);

    return {width: windowSize.width, height: windowSize.height};
}

