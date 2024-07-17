// "use client";

// import styled from "styled-components";

// const Cards = styled.ul`
//   background-color: blueviolet;
//   overflow: hidden;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 2.8rem;
//   justify-content: center;
//   align-items: center;
//   padding: 1.5rem;
// `;

// export default Cards;

export default function Cards({children}) {
  return (
    <ul className="bg-blue-400 grid grid-cols-[repeat(3,1fr)] items-center justify-center gap-[2.8rem] p-[1.5rem] overflow-hidden">
      {children}
    </ul>
  )
}

