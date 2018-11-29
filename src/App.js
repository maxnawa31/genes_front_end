import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import WithLoading from './WithLoading';

const SearchResultsWithLoading = WithLoading(SearchResults);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedGenes: [],
      searchResults: [],
      loading: false
    };
  }

  handleSuggestedGenes = keyword => {
    fetch(`http://localhost:5000/search/${keyword}`).then(res =>
      res.json().then(data => this.setState({ suggestedGenes: data }))
    );
  };
  handleSearchResults = keyword => {
    this.setState({ loading: true, suggestedGenes: [] });
    fetch(`http://localhost:5000/genes/${keyword}`).then(res =>
      res
        .json()
        .then(data => this.setState({ searchResults: data, loading: false }))
    );
  };

  render() {
    return (
      <div className="App">
        <SearchForm
          handleSearchResults={this.handleSearchResults}
          suggestedGenes={this.state.suggestedGenes}
          handleSuggestedGenes={this.handleSuggestedGenes}
        />
        <SearchResultsWithLoading
          loading={this.state.loading}
          results={this.state.searchResults}
        />
      </div>
    );
  }
}

export default App;
