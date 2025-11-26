import React, { Component } from "react";
import MainSections from "./MainSections";
import Breadtext from "./Breadtext";
import Links from "./Links";

export default class Footer extends Component {
  render() {
    return (
      <MainSections>
        <footer className="text-center">
          <Breadtext>
            © 2025 Karin Ekenberg |{" "}
            <Links href="#" target="_self">
              Admin-login
            </Links>
          </Breadtext>
        </footer>
      </MainSections>
    );
  }
}
