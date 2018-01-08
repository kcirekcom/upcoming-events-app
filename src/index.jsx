'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import queryString from 'query-string';
import Header from './components/Header.jsx';
import EventList from './components/EventList.jsx';

import './scss/main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      artist: this.getArtistName()
    };
  }

  getArtistName = () => {
    return queryString.parse(location.search).artist.replace(/\s+/g, ' ').trim();
  }

  render() {
    if (!this.state.artist) {
      return (
        <div className="instructions">Please use the following URL structure: localhost:8080/?artist=Maroon 5</div>
      )
    }

    return (
      <div>
        <Header artist={this.state.artist}/>
        <EventList artist={this.state.artist}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));