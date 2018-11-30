import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 300px;
  height: 20px;
`;

export const StyledDiv = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border: 0;
  margin: 0 auto;
  height: 100%;
  width: 300px;
  position: relative;
  z-index: 100;
`;
export const StyledUl = styled.ul`
  flex: auto;
  padding-bottom: 0px;
  position: fixed;
  z-index: 400;
  /* backface-visibility: visible; */
  /* background-attachment: fixed; */
  background-color: #003E7E;
  margin: 0;
  width: 260px;
  padding-left: 0px;
`;

export const StyledLi = styled.li`
  line-height: 22px;
  display: flex;
  max-width: 100%;
  min-width: 0;
  max-height: none;
  color: white;
  padding-left: 10px;
  &:hover {
    background-color: #000000;
  }
`;

export const StyledHeader = styled.th`
  padding: 10px;
`;

export const StyledTable = styled.table`
  margin: 0 auto;
`;

export const StyledRow = styled.tr`
  background-color: #003E7E;
  color: white;
`;

export const StyledTableData = styled.td``;

export const StyledTableDataLink = styled.a`
  text-decoration: none;
  color: white;
`;
