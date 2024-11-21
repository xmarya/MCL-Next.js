"use client"

import styled from "styled-components";

export const FlexBox = styled.div`
  --direction: ${(props) => props.$direction ?? "column"};
  --align: ${(props) => props.$align ?? "center"};
  --justify: ${(props) => props.$justify ?? "center"};
  --gap: ${(props) => props.$gap};

  width: 100%;
  display: flex;
  flex-direction: var(--direction);
  flex-wrap: wrap;
  align-items: var(--align);
  justify-content: var(--justify);
  gap: var(--gap);

  border: var(--check);
  border-color: lightblue;

`;
