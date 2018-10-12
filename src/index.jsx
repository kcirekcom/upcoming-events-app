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
    let artist = queryString.parse(location.search).artist;

    if (artist !== undefined && artist !== null) {
      return artist.replace(/\s+/g, ' ').trim();
    }
  }

  copyToClipboard = () => {
    var copyText = document.getElementById('inputURL');
    let value = copyText.value;

    if (!navigator.clipboard) {
      copyText.select();
      document.execCommand('copy');
    } else {
      copyText.select();
      navigator.clipboard.writeText(value);
    }
  }

  render() {
    if (!this.state.artist) {
      return (
        <div className='instructions'>
          <p className='copy'>Please use the following URL structure in the address bar: <input type='text' className='input' id='inputURL' value='localhost:8080/?artist=Maroon5'/></p>
          <p>Click on the button below to copy the URL structure.</p>
          <div className='circle' role='button' onClick={this.copyToClipboard} aria-label='Copy to clipboard'tabIndex='0'><span>+</span></div>
          <p className='copied'>Copied!</p>
        </div>
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