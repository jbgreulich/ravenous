import React, { Component } from 'react';

import Yelp from './util/Yelp';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses1 => {
      this.setState({ businesses: businesses1 });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businessListProp={this.state.businesses} />
      </div>
    );
  }
}
