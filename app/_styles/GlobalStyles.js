import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    direction: rtl; // temporary
    --colour-primary: #c69963;
    --colour-primary-dark: #b28451;
    --light-brownish-grey: #d0bda0;
    --muted-brownish-grey: #bda78f;
    --soft-brownish-grey: #b09d7d;
    --medium-brownish-grey: #a68d6a;
    --colour-secondary: #101d2c;
    --colour-secondary-dark-1: #54483a;
    --colour-secondary-dark-2: #6d5d4b;
    --colour-grey-light-1: #f9f7f6;
    --colour-grey-light-2: #e5e7eb;
    --colour-grey-light-3: #aaa;

    /* --font-heading: "IBM Plex Sans Arabic", sans-serif;
    --font-paragraph: "Noto Naskh Arabic", serif; */

    --main-font-colour: #222;
    --sub-paragraph-colour: #5d5d5d;
    --error: #b91c1c;

    
  --hero-heading: clamp(3rem, 8vw, 8rem);
  --section-heading: clamp(2.6rem, 5vw, 3.2rem);
  --secondary-heading: clamp(2.4rem, 5vw, 2.8rem);
  --p-text: clamp(1.4rem, 1.6cqi, 2cqi);
  --button-text: clamp(1.4rem, 1.6rem, 1.8rem);

  --xxl-text: 2.2rem;
  --xl-text: 1.8rem;
  --lg-text: 1.6rem;
  --md-text: 1.4rem;
  --sm-text: 1.3rem;
  --xsm-text: 1.2rem;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);

    --check: 2px solid hotpink;

  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  
*:disabled {
  cursor: not-allowed;
}

html {
  font-size: 62.5%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  overflow-x: hidden;


}

  body {
    max-width: 128rem;
    background-color: var(--colour-grey-light-1);
    color: var(--main-font-colour);

    border: var(--check);
    border-color: red;

    position: relative; // for the Hamburger nad the language button.
  }

  p {
    font-size: var(--p-text);
    line-height: 1.4;
    text-wrap: pretty;
  }

  
button {
  font-family: var(--main-font);
  cursor: pointer;
  background: none;
  border: none;
}

select:disabled,
input:disabled{
  background-color: var(--colour-grey-200);
  color: var(--colour-grey-500);
  border-color: var(--colour-grey-500);
}

a {
  font-family: var(--secondary-font);
  color: inherit;
  text-decoration: none;
  cursor: pointer;

}

/* 
  Q- what does the HERO selector focus-visible do ?
  A- Gets rid of the annoying outline for mouse users but preserves it for keyboard users,
  and is ignored by browsers that don’t support :focus-visible.
*/
a:focus-visible:not(:hover) {
  outline: 0.2rem solid var(--neon-purple);
  outline-offset: 0.6rem;
}

ul,
ol {
  font-family: var(--secondary-font);
  display: block;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  font-style: italic; /* for the alt */
  object-fit: cover;
}

.icon {
  stroke-width: 0.9;
  width: 4rem;
  height: 4rem;
}
  `;

export default GlobalStyles;
