import React from 'react';
import App from '../App';
import SearchForm from '../SearchForm';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {StyledInput} from '../StyledComponents';
import SuggestedGenes from '../SuggestedGenes';
import SearchResults from '../SearchResults';
import Table from '../Table';
configure({ adapter: new Adapter() });

describe('<App/>', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<App />);
  });

  it('should render one SearchForm Component', () => {
    expect(wrapper.find(SearchForm)).toHaveLength(1);
  });
});


describe('<SearchForm/>', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<SearchForm/>)
  })
  it('Should render one div', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })
  it('div has one child form', () => {
    expect(wrapper.find('div').children()).toHaveLength(1)
  })
  it('form has two component children', () => {
    let form = wrapper.find('form')
    expect(form.find(StyledInput)).toHaveLength(1)
    expect(form.find(SuggestedGenes)).toHaveLength(1)
  })
})

describe('<SearchResults/>', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<SearchResults results = {[]}/>)
  })
  it('should render a table Component', () => {
    expect(wrapper.find(Table)).toHaveLength(1);
  })
  it('should render table row Components', () => {
    expect(wrapper.find(Table).children()).toHaveLength(1);
  })
})