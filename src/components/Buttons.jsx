import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <button className="bg-primary-normal hover:bg-primary-hovering 
      text-charcoal active:bg-primary-active disabled:bg-primary-disabled 
      focus:outline-dashed bg-center font-bold py-2 px-4 rounded">
        {this.props.children}
      </button>
    );
  }
}
