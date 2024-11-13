"use client";

import styled from "styled-components";

const StyledTable = styled.div`
  --num-col: ${(props) =>
    props.$numCol}; // the custome css variable lets you get rid of the context hook, because the CCV is accessable between the parent-children

  width: 80%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(var(--num-col), minmax(fit-content, 1fr));

  grid-template-rows: repeat(2, minmax(min(max-content, 100%), 1fr));

  /* overflow-x: scroll; */

  border: var(--check);
`;

const GridSettings = styled.div`
  /* OLD CODE (leaved for reference): 
/ the reason why var(--num-col) is working here, although I didn't nest this comp anywhere is because
// the other children (TableHeader, TableBody, TableRow) have access to the CCV through their parent
display: grid;
grid-template-columns: subgrid;
grid-column: 1 / calc(var(--num-col) + 1);
justify-items: center;
align-items: center;

padding: 1rem;
*/

  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / calc(var(--num-col) + 1);
  justify-items: center;
  align-items: center;
`;

const TableHeader = styled(GridSettings)`
  font-size: 1.8rem;
  font-weight: 600;
  background-color: saddlebrown;
`;

const TableBody = styled(GridSettings)`
  background-color: wheat;
`;

const TableRow = styled(GridSettings)`
  &:not(:last-child) {
    border-bottom: 1px solid var(--colour-secondary-dark-2);
  }
`;

const Footer = styled.footer`
  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled(GridSettings)`
  container-type: inline-size;

  min-height: 5rem;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Table({ columns, children }) {
  return (
    <StyledTable role="table" $numCol={columns}>
      {children}
    </StyledTable>
  );
}

function Header({ children }) {
  return (
    <TableHeader role="row" as="header">
      {children}
    </TableHeader>
  );
}

function Body({ data, render }) {
  if (!data?.length)
    return (
      <Empty>
        <p>لا يوجد بيانات لعرضها</p>
      </Empty>
    );

  return <TableBody>{Object.values(data).map(render)}</TableBody>;
}

function Row({ children }) {
  return (
    <TableRow role="row" as="row">
      {children}
    </TableRow>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
