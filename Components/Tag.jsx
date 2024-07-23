"use client"

import styled, { css } from "styled-components";


const types = {
    normal: css` background-color: var(--colour-primary);`,
    special: css` background-color: pink;`
}

const TagsContainer = styled.ul`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    :hover {
        background-color: var(--colour-primary-dark);
    }
`;

const TagsList = styled.ul`
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.8rem;
`;

const Tag = styled.li`
    color: var(--colour-grey-light-1);
    border-radius: 2rem;
    padding: 0.3rem 0.9rem;
    ${props => types[props.$type]}
`;

Tag.defaultProps = {
    $type: "normal"
}

export {TagsContainer, Tag, TagsList};