'use strict';

import React, { Component } from 'react';
import EventListItem from './EventListItem.jsx';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  fetchEventsInfo = () => {
    var artist = encodeURIComponent(this.props.artist);

    fetch(`https://rest.bandsintown.com/artists/${artist}/events?app_id=bit_challenge`).then(response => {
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
    this.fetchEventsInfo();
  }

  render() {
    if (this.state.data == null || this.state.data.length == 0) {
      return (
        <div className='no-events'>No upcoming events.</div>
      )
    }

    var events = this.state.data.map((d, i) => <EventListItem event={d} key={i}/>);

    return (
      <div className='event-list'>
        {events}
      </div>
    );
  }
}