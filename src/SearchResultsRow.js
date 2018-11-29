import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.tr`
  background-color: #58F0B4;
`

const SearchResultsRow = (props) => {
  return (
    <StyledRow>
      {props.children}
    </StyledRow>
  )
}

export default SearchResultsRow;