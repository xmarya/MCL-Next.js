"use client";

import styled from "styled-components";
import { FlexBox } from "./FlexBox";

export const AppLayout = styled(FlexBox).attrs({ as: "main" })`
  gap: 10rem; // acts as a marging-block between sections

  max-width: 100%;
  min-height: 100svh;
  padding-block: 10rem;
  margin-inline: auto;

  border: var(--check);
  border-color: grey;
`;
