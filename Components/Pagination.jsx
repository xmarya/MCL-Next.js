"use client"

import { ResultesPerPage } from "@/data/constants";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, useContext } from "react";
import ButtonIcon from "./ButtonIcon";

const PageContext = createContext();

export default function Pagination({totalData, children}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
  
    let currentPage = Number(searchParams.get("page") ?? 1);
  
    const totalPages = Math.ceil(totalData / ResultesPerPage);
  
    function handlePagination(requestedPage) {
      currentPage = requestedPage;
      const params = new URLSearchParams(searchParams);
      params.set("page", requestedPage);
      router.push(`${pathname}?${params.toString()}`);
    }
    return (
        <PageContext.Provider value={{totalData, currentPage, totalPages, handlePagination}}>
            {children}
        </PageContext.Provider>
    );
}

export function TotalResults() {
    const {currentPage, totalPages} = useContext(PageContext);
    return (
        <p className="text-center text-lg font-medium">
          {`صفحة ${currentPage} من ${totalPages}`}
        </p>
    );
}

export function Buttons() {
    const {totalPages, currentPage, handlePagination} = useContext(PageContext)
    return (
        <div className="flex justify-center items-center gap-12 mt-6 col-span-full">
        {
          (totalPages > 1 && currentPage > 1) ? 
          <ButtonIcon onClick={() => handlePagination(currentPage - 1)}>
            <ChevronDoubleRightIcon/>
          </ButtonIcon>
          :
          null
        }
        <TotalResults/>
        {
          (totalPages > 1 && currentPage < totalPages) ? 
          <ButtonIcon onClick={() => handlePagination(currentPage + 1)}>
            <ChevronDoubleLeftIcon/>
          </ButtonIcon>
          :
          null
        }
      </div>
    );
}

// Pagination.TotalResults = TotalResults;
// Pagination.Buttons = Buttons;