"use client";

import { Squash as Hamburger } from 'hamburger-react'
import { useRef } from "react";
import styled from "styled-components";
import { navItems } from "./Navigation";
import Link from "next/link";
import { useState } from "react";

const BreadWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 3rem;

  z-index: 500;
`;

const MobileNavigation = styled.ul`
  width: 100%;
  min-height: 70%;
  background-color: var(--soft-brownish-grey);
  font-size: var(--md-text);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;

  box-shadow: var(--shadow-md);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 299;

  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

`;

export default function HamburgerNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <BreadWrapper ref={ref}>
        <Hamburger
          role="button"
          color="var(--colour-secondary-dark-1)"
          rounded
          distance="lg"
          hideOutline={true}
          size={23}
          aria-label="Navigation menu"
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </BreadWrapper>

      {isOpen && (
        <MobileNavigation>
          {navItems.map((nav, index) => (
            <li key={index}>
              <Link href={nav.link}>{nav.label}</Link>
            </li>
          ))}
        </MobileNavigation>
      )}
    </>
  );
}
