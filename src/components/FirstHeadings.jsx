import React, { Component } from "react";

export default class FirstHeadings extends Component {
  render() {
    return (
      <h1 className="text-3xl font-bold text-charcoal pb-5">
        {this.props.children}
      </h1>
    );
  }
}
