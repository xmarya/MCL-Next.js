"use client";

import styled from "styled-components";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import Logo from "./Logo";
import useWindowSize from "@/hooks/useWindowSize";
import HamburgerNavigation from "./HamburgerNavigation";

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

const tbSize = 600;
export default function Header({ children }) {
  const {width} = useWindowSize();

  return (
    // FIXME: the humen is appearing after the loading/reloading each time because the window.with is unknown at the time, change the condition later to prevent this case from happening
    width >= tbSize ?
    <StyledHeader>
        {children}
          <SearchBar />
          <Navigation />
          <Logo />
    </StyledHeader>

    :

    <HamburgerNavigation/>
  );
}
