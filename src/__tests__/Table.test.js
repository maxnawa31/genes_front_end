import React from 'react';
import Table from '../Table';
import TableRow from '../TableRow';
import TableData from '../TableData';
import TableHeader from '../TableHeader';
import renderer from 'react-test-renderer';

describe('<Table/>', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Table/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('<TableRow/>', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<TableRow/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('<TableData/>', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<TableData/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

describe('<TableHeader/>', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<TableData/>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})