"use client";

import styled from "styled-components";


const Form = styled.form`
  --form-max-width: 40rem;
  --form-max-height: 5rem;

  width: min(var(--form-max-width), 30%);
  height: min(var(--form-max-height), 100%);

  > input {
    font-size: 1.2rem;
    width: 100%;
    height: 100%;
    padding: 1rem;

  }

`;
export default function SearchBar() {
  return (
    <Form>
      <input type="text" name="search" id="search" placeholder="ابحث" />
    </Form>
  );
}
