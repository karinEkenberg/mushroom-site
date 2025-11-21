import React, { Component } from "react";

export default class MainSections extends Component {
  render() {
    return (
      <div className="w-[90%] md:w-[80%] lg:max-w-6xl mx-auto bg-canvas text-charcoal p-8 rounded-lg shadow-lg my-12">
        {this.props.children}
      </div>
    );
  }
}
