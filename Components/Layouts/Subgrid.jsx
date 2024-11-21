"use client";

import styled from "styled-components";

export const Subgrid = styled.div`
  --col-width: 24rem;
  --num-cols: ${(props) => props.$numCols};
  --num-rows: ${(props) => props.$numRows};
  --gap: ${(props) => props.$gap};

  
  grid-column-end: -1;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--col-width), 100%), 0.7fr));
  /* grid-template-columns: repeat(auto-fit, 
    minmax(
      min(var(--col-width), 100%), 
      max(28rem, var(--col-width))
    )); */
    
  grid-template-rows: repeat(var(--num-rows), minmax(min(max-content, 100%), 1fr));
  justify-content: center;
  column-gap: var(--gap);

  & > * {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span var(--num-rows);
  }

  border: var(--check);
  border-color: yellow;

`;
