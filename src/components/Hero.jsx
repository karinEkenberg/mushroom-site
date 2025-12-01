import React, { Component } from "react";
import MainSections from "./MainSections";
import Buttons from "./Buttons";

export default class Hero extends Component {
  render() {
    return (
      <MainSections>
        <div className="relative w-full">
          <picture className="w-full block">
            <source
              media="(max-width: 768px)"
              srcSet="./src/assets/images/svampsidan-hero-mobile.webp"
            />
            <img
              src="./src/assets/images/svampsidan-hero.webp"
              alt="svampsidan-hero"
              loading="lazy"
              className="w-full h-[650px] object-cover"
            />
          </picture>

          <div className="absolute inset-0 flex flex-col sm:flex-row md:items-end items-center md:justify-start justify-end gap-4 p-4 bg-black/30">
            <Buttons>Utforska Nu</Buttons>
            <Buttons>Lär Dig Mer</Buttons>
          </div>
        </div>
      </MainSections>
    );
  }
}
