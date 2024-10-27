"use client";

import styled from "styled-components";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import Logo from "./Logo";

const StyledHeader = styled.header``


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
