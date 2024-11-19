"use client";

import styled from "styled-components";
import { Grid } from "./Grid";

export const Subgrid = styled(Grid)`
  
  grid-column: 2 / -1;

  & > * {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 5;
  }

  border: var(--check);
  border-color: yellow;

`;
