"use client"

import styled from "styled-components";

const Input = styled.input`
  background-color: var(--colour-grey-light-1);
  width: 100%;
  height: 3rem;
  font-size: 1.3rem;
  color: var(--colour-secondary);
  text-align: left;
  border-radius: 3px;
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1rem;
  border: 0.3rem solid transparent;
  outline: none;

  &:hover {
      border: 0.3rem solid var(--colour-primary);
  }

  &:focus {
    border: 0.3rem solid var(--colour-primary-dark);
  }
`;

export default Input;