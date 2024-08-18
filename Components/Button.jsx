"use client"

import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const btnTypes = {
  primary: css`
    /* color: var(--colour-brand-50); */
    /* background-color: var(--colour-brand-600); */
    background-color: var(--colour-primary-dark);

    &:hover {
      background-color: var(--colour-primary);
    }
  `,
  secondary: css`
    color: var(--sub-paragraph-colour);
    background: var(--colour-grey-light-2);
    border: 1px solid var(--colour-grey-light-2);

    &:hover {
      color: var(--colour-grey-light-1);
      background-color: var(--light-brownish-grey);
      border: 1px solid var(--light-brownish-grey);
    }
  `,
  danger: css`
    color: var(--colour-grey-light-1);
    background-color: red;

    &:hover {
      background-color: #fc3939;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 0.3rem;
  box-shadow: var(--shadow-sm);
  border-end-end-radius: 2rem;
  transition: all 0.3s ease;
  
  ${(props) => props.$useEndBorder && css`border-end-end-radius: 2rem;`};
  ${(props) => sizes[props.$size]};
  ${(props) => btnTypes[props.$btnType]};


  &:hover {
    border-end-end-radius: 0.3rem;
  }
`;

Button.defaultProps = {
    $btnType: "primary",
    $size: "medium",
};

export default Button;
