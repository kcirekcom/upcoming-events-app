'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';

import './scss/main.scss';

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   artist: this.getArtistName()
    // };
  }

  // getArtistName = () => {
  //   return queryString.parse(location.search).artist;
  // }

  render() {
    // if (!this.state.artist) {
    //   return (
    //     <div>Please use the following URL structure: localhost:3000/?artist=Maroon 5</div>
    //   )
    // }

    return (
      <div>
        Hello
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
{/* <Header artist={this.state.artist}/>
<EventList artist={this.state.artist}/>
<SearchForArtist data={this.state.data}/> */}