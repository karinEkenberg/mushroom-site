import React, { Component } from "react";

export default class Breadtext extends Component {
  render() {
    return (
      <p className="text-xl text-charcoal w-full pb-5">{this.props.children}</p>
    );
  }
}
