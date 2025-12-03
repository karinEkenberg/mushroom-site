import React, { Component } from "react";
import MainSections from "./MainSections";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <MainSections>
      <div className="relative mx-auto pb-5 pt-5 w-[90%]">
        <picture className="w-full block">
          <source
            media="(max-width: 768px)"
            srcSet="./src/assets/images/svampsidan-hero-mobile.webp"
          />

          <img
            src="./src/assets/images/svampsidan-hero.webp"
            alt="svampsidan-hero"
            loading="lazy"
            className="w-full object-cover"
          />
        </picture>

        <div className="absolute inset-0 flex flex-col justify-between p-4">
          <div className="w-full flex justify-center pt-20">
            <h1 className="text-5xl md:text-7xl text-white [-webkit-text-stroke:1px_black] font-delius text-center">
              Karins Svampar
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center md:justify-start justify-end gap-4 w-full pb-4 md:pl-4">
            <Buttons>Utforska Nu</Buttons>
            <Buttons>Lär Dig Mer</Buttons>
          </div>
        </div>
      </div>
    </MainSections>
  );
};

export default Hero;
