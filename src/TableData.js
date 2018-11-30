import React from 'react';
import { StyledTableData, StyledTableDataLink } from './StyledComponents';

const TableData = props => {
  return <StyledTableData>{props.data}</StyledTableData>;
};

export const TableDataLink = props => {
  return <StyledTableDataLink target='blank' href={props.data}>More Info</StyledTableDataLink>
}
export default TableData;

