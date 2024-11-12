import Link from "next/link";
import styled from "styled-components";

const StyledNavigation = styled.ul` 
 
  width:45%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.8rem;

  li {
    font-size: 1.2rem;
  }
`;

export const navItems = [
  {
    label: "الرئيسية",
    link:"/"
  },
  {
    label: "المحاصيل",
    link:"/beans"
  },
  {
    label: "المحامص",
    link:"/roasters"
  },
  {
    label: "محامص قريبة",
    link:"/nearestRoasters"
  },
];

export default function Navigation() {
  
  return (
    <StyledNavigation>
      {
        navItems.map((nav, index) => 
          <li key={index}>
            <Link href={nav.link}>{nav.label}</Link>
          </li>
        )
      } 
    </StyledNavigation>
  );
}
