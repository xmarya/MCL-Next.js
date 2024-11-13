"use client";

import styled from "styled-components";

export const Subgrid = styled.ul`
  --num-col: ${(props) => props.$numCol}; 
  --num-row: ${(props) => props.$numRow}; 
  --gap: ${(props) => props.$gap};

  background-color: royalblue;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(var(--num-col), minmax(15rem, 1fr));
  grid-template-rows: repeat(var(--num-row), minmax(min(max-content, 100%), 1fr));
  column-gap: 2rem;
  
  & > * {
      display: grid;
      grid-template-rows: subgrid;
      grid-row: span var(--num-row);
  }
  
`;
