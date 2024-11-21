"use client"

import styled from "styled-components"
import { FlexBox } from "./Layouts/FlexBox";

export const Aside = styled(FlexBox).attrs({as: "aside"})`

    height: fit-content;
    background-color: #4b5563;
    padding: 1rem;

    @media (max-width: 48em) {
        // 768 / 16

        display: none;

    }

`;