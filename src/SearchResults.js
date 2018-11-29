import React, { Component } from 'react';
import SearchResultsTable from './SearchResultsTable';
import SearchResultsHeader from './SearchResultsHeader';
import SearchResultsRow from './SearchResultsRow';
import SearchResultsData from './SearchResultsData';

const SearchResults = props => {
  return (
    <SearchResultsTable>
      <SearchResultsRow>
        <SearchResultsHeader header={'GENE'} />
        <SearchResultsHeader header={'NUCLEOTIDE CHANGE'} />
        <SearchResultsHeader header={'PROTEIN CHANGE'} />
        <SearchResultsHeader header={'ALIAS'} />
        <SearchResultsHeader header={'REGION'} />
        <SearchResultsHeader header={'REPORTED CLASSIFICATION'} />
        <SearchResultsHeader header={'LAST EVALUATED'} />
        <SearchResultsHeader header={'LAST UPDATED'} />
        <SearchResultsHeader header={'MORE INFO'} />
      </SearchResultsRow>
      {props.results.map((result, i) => {
        const {
          Gene: gene,
          'Nucleotide Change': nucleotide,
          'Protein Change': proteinChange,
          Alias: alias,
          Region: region,
          'Reported Classification': classification,
          'Last Evaluated': lastEval,
          'Last Updated': lastUpdated,
          'More Info': moreInfo
        } = result;
        return (
          <SearchResultsRow key={i}>
            <SearchResultsData data={gene} />
            <SearchResultsData data={nucleotide} />
            <SearchResultsData data={proteinChange} />
            <SearchResultsData data={alias} />
            <SearchResultsData data={region} />
            <SearchResultsData data={classification} />
            <SearchResultsData data={lastEval} />
            <SearchResultsData data={lastUpdated} />
            <SearchResultsData data={moreInfo} />
          </SearchResultsRow>
        );
      })}
    </SearchResultsTable>
  );
};

export default SearchResults;
