import React from 'react';
import { StyledTable } from './StyledComponents';

const Table = props => {
  return (
    <StyledTable>
      <tbody>{props.children}</tbody>
    </StyledTable>
  );
};

export default Table;
