"use client";

import styled from "styled-components";
import { FlexBox } from "./FlexBox";

export const AppLayout = styled(FlexBox).attrs({ as: "main" })`
  gap: 10rem;
  max-width: 95%;
  min-height: 100svh;
  padding-block: 10rem;
  margin-inline: auto;

  background-color: grey;
`;
