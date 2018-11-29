import React from 'react';
import { StyledRow } from './StyledComponents';

const SearchResultsRow = props => {
  return <StyledRow>{props.children}</StyledRow>;
};

export default SearchResultsRow;
