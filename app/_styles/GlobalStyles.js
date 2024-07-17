import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    direction: rtl;
    --colour-primary: #c69963;
    --colour-primary-dark: #b28451;

    --colour-secondary: #101d2c;
    --colour-secondary-dark-1: #54483a;
    --colour-secondary-dark-2: #6d5d4b;

    --colour-grey-light-1: #f9f7f6;
    --colour-grey-light-2: #aaa;

    /* --font-heading: "IBM Plex Sans Arabic", sans-serif;
    --font-paragraph: "Noto Naskh Arabic", serif; */

    --main-font-colour: #222;
    --sub-paragraph-colour: #5d5d5d;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;

    background-color: var(--colour-grey-light-1);
    color: var(--main-font-colour);

  }
  
  *:focus:not(:hover),
  a:focus:not(:hover) {
    /* outline: 0.3rem solid;
    outline-offset: 0.2rem; */
  }

  .grid-container {
  max-width: 128rem;
  background-color: palevioletred;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  /* grid-template-columns:
    [full-start] minmax(0.7rem, 1fr) [centre-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [centre-end] minmax(0.7rem, 1fr) [full-end]; */
  }

  .main-heading-52 {
    font-size: 5.2rem;
    font-weight: 700;
    margin-bottom: 2rem;

  }

  .section-heading-42 {
    font-size: 4.2rem;
    font-weight: 500;
  }

  .sub-heading-32 {
    font-size: 3.2rem;
    font-weight: 600;
    color: var(--sub-paragraph-colour);
    margin-bottom: 5.5rem;
  }

  .text-24 {
    font-size: 2.4rem;
  }

  .text-18 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .text-13 {
    font-size: 1.3rem;
    font-weight: 800;
    line-height: 1.6;
  }

.grey-paragraph {
  text-align: center;
  font-family: inherit;
  color: var(--sub-paragraph-colour);
  font-size: 1.8rem;
}

.icon {
  stroke-width: 0.9;
  width: 4rem;
  height: 4rem;
}
  `;
export default GlobalStyles;
