"use client";

import styled from "styled-components";

export const Subgrid = styled.div`
  --col-width: 24rem;
  --num-cols: ${(props) => props.$numCols};
  --num-rows: ${(props) => props.$numRows};
  --gap: ${(props) => props.$gap};
  --span-col: ${(props) => props.$spanCol};

  
  container-type: inline-size;
  grid-column: 2 / -1;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--col-width), 100%), 1fr));
  grid-template-rows: repeat(var(--num-rows), minmax(min(max-content, 100%), 1fr));
  column-gap: var(--gap);


  & > * {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span var(--num-rows);
  }

  border: var(--check);
  border-color: yellow;

`;
