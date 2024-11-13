"use client"

import styled from "styled-components";

export const FlexBox = styled.div`
  --direction: ${(props) => props.$direction ?? "column"};
  --gap: ${(props) => props.$gap};

  width: 100%;
  display: flex;
  flex-direction: var(--direction);
  align-items: center;
  justify-content: center;
  gap: var(--gap);

  background-color: lightblue;
`;
