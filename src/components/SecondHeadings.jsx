import React, { Component } from "react";

export default class SecondHeadings extends Component {
  render() {
    return (
      <h2 className="text-2xl font-bold text-charcoal pb-5">
        {this.props.children}
      </h2>
    );
  }
}
