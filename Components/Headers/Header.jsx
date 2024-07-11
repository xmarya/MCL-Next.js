"use client";

import styled from "styled-components";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import Logo from "./Logo";

const StyledHeader = styled.header`
  /* border-bottom: 0.1rem solid var(--colour-secondary); */
  border-bottom: 0.1rem solid var(--colour-grey-light-1);
  padding: 2rem 4rem;
  margin-bottom: 5rem;

  background-color: honeydew;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
`;

export default function Header({ children }) {
  return (
    <StyledHeader>
      <HeaderContainer>
        {children}
          <SearchBar />
          <Navigation />
          <Logo />
      </HeaderContainer>
    </StyledHeader>
  );
}
