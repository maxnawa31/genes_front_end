import React from 'react';
import { StyledTable } from './StyledComponents';

const SearchResultsTable = props => {
  return (
    <StyledTable>
      <tbody>{props.children}</tbody>
    </StyledTable>
  );
};

export default SearchResultsTable;
