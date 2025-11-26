import React, { Component } from "react";

export default class Breadtext extends Component {
  render() {
    return <p className="text-xl text-charcoal">{this.props.children}</p>;
  }
}
