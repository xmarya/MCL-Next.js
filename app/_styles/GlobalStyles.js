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
  --p-text: clamp(1.6rem, 2.5cqi, 2rem);
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

    --check: 3px solid pink;

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
    outline: none;
    outline-offset: 0;
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
    color: var(--colour-secondary-dark-1);
    font-size: 4.2rem;
    font-weight: 500;
    margin-bottom: 4.4rem;
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
  /* font-size: 1.8rem; */
  font-size: 1.2rem;
  font-weight: 500;
}

.icon {
  stroke-width: 0.9;
  width: 4rem;
  height: 4rem;
}
  `;
export default GlobalStyles;
