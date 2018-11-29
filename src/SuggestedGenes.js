import React from 'react';
import styled from 'styled-components';
import { StyledDiv, StyledUl, StyledLi } from './StyledComponents';

const SuggestedGenes = props => {
  const SuggestedGenesList = props.allGenes.map((gene, i) => {
    return (
      <StyledLi key={i} onClick={() => props.handleClick(gene)}>
        {gene}
      </StyledLi>
    );
  });
  return (
    <StyledDiv>
      <StyledUl genesList={props.allGenes}>{SuggestedGenesList}</StyledUl>
    </StyledDiv>
  );
};

export default SuggestedGenes;
