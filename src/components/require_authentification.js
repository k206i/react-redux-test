import React, { Component } from 'react';

export default function(ComposedComponent) {
  class Authentification extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return Authentification;
}