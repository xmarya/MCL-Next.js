"use client";

import { useRoasterNames } from "@/hooks/contexts/RoastersNames";
import { useRouter, useSearchParams } from "next/navigation";

import styled from "styled-components";


const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 1.6rem;
`;

export default function BeansFilter({ filterOptions }) {
  //http://localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&notesAr=لوز
  // for the same field with multiple values :
  // http://localhost:3000/beans?notesAr=شوكولاتة&لوز

  const searchParams = useSearchParams();
  const router = useRouter();
  const { namesAr, namesEn } = useRoasterNames();
  console.log(namesAr);
  console.log(options);

  function handleSelect(selectedOpt) {}

  return (
    <StyledFilter>
      <p>ايحاءات المحصول:</p>
    </StyledFilter>
  );
}
