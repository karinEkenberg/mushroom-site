import React, { Component } from "react";

export default class Breadtext extends Component {
  render() {
    return <p className="text-xl text-olive">{this.props.children}</p>;
  }
}
