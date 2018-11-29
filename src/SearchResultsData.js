import React from 'react';
import styled from 'styled-components';

const StyledTableData = styled.td`

`
const SearchResultsData = (props) => {
  return (
    <StyledTableData>
      {props.data}
    </StyledTableData>
  )
}

export default SearchResultsData;