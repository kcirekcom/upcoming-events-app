import React, { Component } from 'react';
import moment from 'moment';

export default class EventListItem extends Component {
  renderOffers = () => {
    if (this.props.event.offers.length == 0) return null;
    return <a href={this.props.event.offers[0].url}>Tickets</a>;
  }

  renderLocation = () => {
    if (this.props.event.venue.country == 'United States') {
      return (
        <span>
          {this.props.event.venue.city}, {this.props.event.venue.region}
        </span>
      )
    }

    return (
      <span>
        {this.props.event.venue.city}, {this.props.event.venue.country}
      </span>
    )
  }

  render() {
    return (
      <div>
        <span>{moment(this.props.event.datetime).format('MMM D')}</span>
        <span>{this.props.event.venue.name}</span>
        {this.renderLocation()}
        {this.renderOffers()}
      </div>
    );
  }
}