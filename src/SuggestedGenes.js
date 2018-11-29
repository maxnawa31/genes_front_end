import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border: 0;
  height: 100%;
  width: 300px;
  border-radius: 24px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
  overflow: auto;
  text-align: left;
  z-index: 99;
`;
const StyledUl = styled.ul`
  flex: auto;
  padding-bottom: 0px;
`;

const StyledLi = styled.li`
  line-height: 22px;
  display: flex;
  width: 100%;
  min-width: 0;
  max-height: none;
  padding: 0;
  &:hover {
    background-color: #58f0b4;
  }
`;
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
