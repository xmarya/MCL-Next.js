"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Button from "../Button"

export default function CardsList({totalData, children}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  let currentPage = Number(searchParams.get("page") ?? 1);

  const totalPages = Math.ceil(totalData / 12);

  function handlePagination(requestedPage) {
    currentPage = requestedPage;
    const params = new URLSearchParams(searchParams);
    params.set("page", requestedPage);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <ul className="bg-blue-400 grid grid-cols-[repeat(3,1fr)] items-center justify-center gap-[2.8rem] p-[1.5rem] overflow-hidden">
      {children}
      </ul>
      <div className="flex justify-center items-center gap-5 bg-red-400 mt-6">
        {
          (totalPages > 1 && currentPage > 1) ? 
          <Button onClick={() => handlePagination(currentPage - 1)}>السابق</Button>
          :
          null
        }
        <span>Page {currentPage} of {totalPages}</span>
        {
          (totalPages > 1 && currentPage < totalPages) ? 
          <Button onClick={() => handlePagination(currentPage + 1)}>التالي</Button>
          :
          null
        }
      </div>
    </div>
  )
}

