"use client";

import styled from "styled-components";

export const Grid = styled.div`
  --col-width: 20rem;
  --num-cols: ${(props) => props.$numCols};
  --num-rows: ${(props) => props.$numRows};
  --gap: ${(props) => props.$gap};

  
  container-type: inline-size;
  width: 100%;
  max-width: 100%;

  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(min(var(--col-width), 100%), 1fr)); */
  grid-template-columns: 0.3fr 1fr;
  grid-template-rows: repeat(var(--num-rows), minmax(min(max-content, 100%), 1fr));
  column-gap: var(--gap);
      
  padding-inline: 1rem;

  border: var(--check);
  border-color: royalblue;
`;
