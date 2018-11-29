import React, { Component } from 'react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableData from './TableData';

const SearchResults = props => {
  return (
    <Table>
      <TableRow>
        <TableHeader header={'GENE'} />
        <TableHeader header={'NUCLEOTIDE CHANGE'} />
        <TableHeader header={'PROTEIN CHANGE'} />
        <TableHeader header={'ALIAS'} />
        <TableHeader header={'REGION'} />
        <TableHeader header={'REPORTED CLASSIFICATION'} />
        <TableHeader header={'LAST EVALUATED'} />
        <TableHeader header={'LAST UPDATED'} />
        <TableHeader header={'MORE INFO'} />
      </TableRow>
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
          <TableRow key={i}>
            <TableData data={gene} />
            <TableData data={nucleotide} />
            <TableData data={proteinChange} />
            <TableData data={alias} />
            <TableData data={region} />
            <TableData data={classification} />
            <TableData data={lastEval} />
            <TableData data={lastUpdated} />
            <TableData data={moreInfo} />
          </TableRow>
        );
      })}
    </Table>
  );
};

export default SearchResults;
