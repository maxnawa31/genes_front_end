import React from 'react';
import { StyledHeader } from './StyledComponents';

const TableHeader = props => {
  return <StyledHeader>{props.header}</StyledHeader>;
};

export default TableHeader;
