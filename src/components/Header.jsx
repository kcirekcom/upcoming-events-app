'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  fetchHeaderInfo = () => {
    var artist = encodeURIComponent(this.props.artist);

    fetch(`https://rest.bandsintown.com/artists/${artist}?app_id=bit_challenge`).then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        data: data
      });
    }).catch(err => {
      console.error(err);
    });
  }

  componentWillMount() {
    this.fetchHeaderInfo();
  }

  render() {
    if (this.state.data == null) {
      return (
        <div/>
      )
    }

    return (
      <div className="header-content">
        <img src={this.state.data.thumb_url} width="80" alt={this.state.data.name}/>
        <div className="header-text-container">
          <h1>{this.state.data.name}</h1>
          <h2>Upcoming Events</h2>
        </div>
      </div>
    );
  }
}