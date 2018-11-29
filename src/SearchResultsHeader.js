import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.th`
  padding: 10px;
`
const SearchResultsHeader = (props) => {
  return (
    <StyledHeader>
      {props.header}
    </StyledHeader>
  )
}

export default SearchResultsHeader;