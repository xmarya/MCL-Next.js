"use client";

import styled from "styled-components";

export const Grid = styled.div`
  --col-width: 15rem;
  --num-cols: ${(props) => props.$numCols};
  --num-rows: ${(props) => props.$numRows};
  --span-cols: ${(props) => props.$spanCols};
  --gap: ${(props) => props.$gap};

  
  container-type: inline-size;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    var(--num-cols, auto-fit),
    minmax(min(var(--col-width), 100%), 1fr)
    );
    grid-template-rows: repeat(
      var(--num-rows),
      minmax(min(max-content, 100%), 1fr)
      );
      column-gap: var(--gap);
      
      padding-inline: 1rem;

      border: var(--check);
      border-color: royalblue;
`;
