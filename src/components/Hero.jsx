import React, { Component } from "react";
import MainSections from "./MainSections";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <MainSections>
      <div className="relative mx-auto pb-5 pt-5 w-[90%]">
        <h1 className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </h1>
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

        <div className="absolute inset-0 flex flex-col sm:flex-row md:items-end items-center md:justify-start justify-end md:gap-7 md:p-20 gap-4 p-10 ">
          <Buttons>Utforska Nu</Buttons>
          <Buttons>Lär Dig Mer</Buttons>
        </div>
      </div>
    </MainSections>
  );
};

export default Hero;
