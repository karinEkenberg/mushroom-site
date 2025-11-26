import React, { Component } from "react";

export default class Links extends Component {
  render() {
    return (
      <a
        className="text-charcoal hover:text-olive active:text-linkactive visited:text-linkvisited underline"
        href="{this.props.href || '#'}"
        target="{this.props.target || '_self'}"
        rel="noreferrer"
      >
        {this.props.children}
      </a>
    );
  }
}
