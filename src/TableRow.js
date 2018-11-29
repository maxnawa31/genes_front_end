import React from 'react';
import { StyledRow } from './StyledComponents';

const TableRow = props => {
  return <StyledRow>{props.children}</StyledRow>;
};

export default TableRow;
