"use client"

import { createContext, useContext } from "react"
import styled from "styled-components";

const StyledTable = styled.div`
  
`;


const TableHeader = styled.div`
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--main-font-colour);
  border-bottom: 1px solid var(--colour-secondary-dark-2);
  padding: 1.6rem 2.4rem;
`;

const TableRow = styled.div`
  text-align: center;
  padding: 2.4rem 4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--colour-secondary-dark-2);
  }
`;

const TableBody = styled.section`
 
`;

const Footer = styled.footer`
  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  
`;


const TableContext = createContext();

export default function Table({ columns, children }) {
    return (
        <TableContext.Provider value={{columns}}>
            <StyledTable role="table">
                {children}
            </StyledTable>
            
        </TableContext.Provider>
    )
}

function Header({children}) {
    const {columns} = useContext(TableContext);

    return(
        <TableHeader role="row" as="header" columns={columns}>
            {children}
        </TableHeader>
    );
}


function Body({data, render}) {
    if(!data?.length) return <div>لا يوجد بيانات لعرضها</div>
    
    return(
        <TableBody>
            {Object.values(data).map(render)}
        </TableBody>  
    );
}


function Row({children}) {
    const {columns} = useContext(TableContext);
    return(
        <TableRow role="row" as="header" columns={columns}>
            {children}
        </TableRow>
    );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;