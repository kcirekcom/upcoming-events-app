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
      <div>
        <span>{this.state.data.name}</span>
        <img src={this.state.data.thumb_url}/>
      </div>
    );
  }
}