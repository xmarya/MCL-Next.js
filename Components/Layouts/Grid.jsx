"use client";

import styled from "styled-components";

export const Grid = styled.div`
  --col-width: 20rem;
  --num-cols: ${(props) => props.$numCols};
  --num-rows: ${(props) => props.$numRows};
  --gap: ${(props) => props.$gap};

  
  width: 100%;
  max-width: 100%;

  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-template-rows: repeat(var(--num-rows), minmax(min(max-content, 100%), 1fr));
  align-content: center;
  column-gap: var(--gap);
      
  padding-inline: 1rem;

  border: var(--check);
  border-color: royalblue;

  @media (max-width: 48em) {
        // 768 / 16
        grid-template-columns: 1fr;
        row-gap: var(--gap);
    }
`;
