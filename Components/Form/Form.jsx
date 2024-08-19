"use client";

import styled from "styled-components";
import Button from "../Button";

const Form = styled.form`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.4rem 0;
  `;

const FormError = styled.p`
  min-height: 1.8rem; /* this line for reserving the space, adjust the preserved height based on font-size */
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--error);
  margin: 0; /* Ensure no additional margin is added */
  visibility: ${(props) => (props.$hasError ? "visible" : "hidden")};
`;

const FormButton = styled(Button)`
  align-self: center;
  margin-top: 3rem;
`;

export { Form, FormError, FormButton };
