import React, { Component } from 'react';

export default class AppUnauthorized extends Component {
  render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}
