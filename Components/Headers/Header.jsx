"use client";

import styled from "styled-components";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import Logo from "./Logo";

const StyledHeader = styled.header`
  container-type: inline-size;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-inline: 1.5rem;

  &> * {
    border: var(--check);
  }
  
`


export default function Header({ children }) {
  return (
    <StyledHeader>
        {children}
          <SearchBar />
          <Navigation />
          <Logo />
    </StyledHeader>
  );
}
