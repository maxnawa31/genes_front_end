import React, { Component } from 'react';
import SuggestedGenes from './SuggestedGenes';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 300px;
  height: 20px;
`;
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  handleChange = e => {
    const { handleSuggestedGenes } = this.props;
    this.setState({ [e.target.name]: e.target.value }, () => {
      const { keyword } = this.state;
      handleSuggestedGenes(keyword);
    });
  };

  handleSubmit = gene => {
    const { handleSearchResults, handleLoading } = this.props;
    this.setState({ keyword: gene }, () =>
      handleSearchResults(this.state.keyword)
    );
  };
  render() {
    return (
      <div>
        <form>
          <StyledInput
            onChange={this.handleChange}
            name="keyword"
            type="text"
          />
          <SuggestedGenes
            handleClick={this.handleSubmit}
            allGenes={this.props.suggestedGenes}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
