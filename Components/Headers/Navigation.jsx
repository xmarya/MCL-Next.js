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

export default function Navigation() {
  
  return (
    <StyledNavigation>
        <li>
          <Link href="/">
            الرئيسية
          </Link>
        </li>
        <li>
          <Link href="/beans">
            المحاصيل
          </Link>
        </li>
        <li>
          <Link href="/roasters">
            المحامص
          </Link>
        </li>
        <li>
          <Link href="/nearestRoasters">
          محامص قريبة
          </Link>
        </li>     
    </StyledNavigation>
  );
}
