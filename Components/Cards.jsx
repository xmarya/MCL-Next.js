"use client";

import styled from "styled-components";

const Cards = styled.ul`
  background-color: blueviolet;
  list-style: none;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

export default Cards;