import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <button
        className="bg-primary-normal hover:bg-primary-hovering 
      text-charcoal w-full py-2 px-2 text-lg active:bg-primary-active disabled:bg-primary-disabled 
      focus:outline-dashed bg-center font-bold md:w-auto md:py-2 md:px-4 rounded shadow-lg"
      >
        {this.props.children}
      </button>
    );
  }
}
