import React from 'react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableData, { TableDataLink } from './TableData';

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
          URL: moreInfo
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
            <TableDataLink data={moreInfo} />
          </TableRow>
        );
      })}
    </Table>
  );
};

export default SearchResults;
