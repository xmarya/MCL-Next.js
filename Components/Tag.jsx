"use client"

import styled from "styled-components";

const TagsContainer = styled.ul`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    :hover {
        background-color: var(--colour-primary-dark);
    }
`;
const Tag = styled.li`
    padding: 0.3rem 0.9rem;
    background-color: var(--colour-primary);
    color: var(--colour-grey-light-1);
    border-radius: 2rem;
`;

export {TagsContainer, Tag};