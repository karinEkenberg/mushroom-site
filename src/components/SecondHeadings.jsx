import React, { Component } from "react";

export default class SecondHeadings extends Component {
  render() {
    return (
      <h2 className="text-2xl font-bold text-charcoal text-center">
        {this.props.children}
      </h2>
    );
  }
}
