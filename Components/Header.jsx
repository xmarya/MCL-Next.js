"use client"

import styled from "styled-components"
// import Navigation from "./Navigation";
import Logo from "./Logo";

const StyledHeader = styled.header`
    border-bottom: 0.1rem solid var(--colour-primary);
    padding: 2rem 3.2rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

export default function Header({ children }) {
    return (
        <StyledHeader>
            <HeaderContainer>
                {children}
                <Logo/>
            </HeaderContainer> 
        </StyledHeader>
    )
}


