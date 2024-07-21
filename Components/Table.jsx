"use client"

import { createContext, useContext } from "react"
import styled from "styled-components";

const StyledTable = styled.div`
  background-color: var(--colour-grey-light-1);
  font-size: 1.4rem;
  border: 1px solid var(--colour-secondary);
  border-radius: 7px;
  overflow: hidden;
`;


const TableColumns = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.8rem;
  align-items: center;
  /* transition: none; ?? */
`;

const StyledHeader = styled(TableColumns)`
  background-color: var(--colour-grey-light-1);
  text-align: center;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: var(--main-font-colour);
  border-bottom: 1px solid var(--colour-secondary-dark-2);
  padding: 1.6rem 2.4rem;
`;

const StyledRow = styled(TableColumns)`
  text-align: center;
  padding: 2.4rem 4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--colour-secondary-dark-2);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--colour-grey-light-1);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
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
        <StyledHeader role="row" as="header" columns={columns}>
            {children}
        </StyledHeader>
    );
}


function Body({data, render}) {
    if(!data?.length) return <div className="text-center my-6">لا يوجد بيانات لعرضها</div>
    
    return(
        <StyledBody>
            {Object.values(data).map(render)}
        </StyledBody>  
    );
}


function Row({children}) {
    const {columns} = useContext(TableContext);
    return(
        <StyledRow role="row" as="header" columns={columns}>
            {children}
        </StyledRow>
    );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;