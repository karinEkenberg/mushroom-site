import React, { Component } from "react";
import MainSections from "./MainSections";
import Breadtext from "./Breadtext";

export default class Footer extends Component {
  render() {
    return (
      <MainSections>
        <footer className="text-center">
          <Breadtext>© 2025 Karin Ekenberg | Admin-login</Breadtext>
        </footer>
      </MainSections>
    );
  }
}
