"use client"

import styled from "styled-components";


const ButtonIcon = styled.button`
    transition: all 0.3s ease;

    & svg {
        width: 3.3rem;
        height: 3.3rem;
        color: var(--colour-secondary);
        stroke-width: 0.01rem;

        &:hover {
            color: var(--soft-brownish-grey);
        }
    }
`;

export default ButtonIcon;
