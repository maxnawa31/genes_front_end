import React from 'react';
import SearchResultsHeader from './SearchResultsHeader';
import styled from 'styled-components';

const SearchResultsTable = (props) => {
  return(
    <table>
      <tbody>
      {props.children}
      </tbody>
    </table>


  )
}

export default SearchResultsTable;