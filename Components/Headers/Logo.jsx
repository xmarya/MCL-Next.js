// import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";


const LogoLink = styled(Link)`
  max-width: max-content;
`;

export default function Logo() {
    return (
        <LogoLink href="/">
          {/* <Image src="" height="60" width="60" alt="MCL logo" /> */}
          <span className="text-xl font-semibold text-primary-100">
            MCL
          </span>
        </LogoLink>
      );
}

