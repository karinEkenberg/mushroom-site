import React from "react";
import "./App.css";
import MainSections from "./components/MainSections.jsx";
import bgImage from "./assets/images/background.png";
import FirstHeadings from "./components/FirstHeadings.jsx";
function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-charcoal fixed -z-10 bg-repeat bg-[length:150px] h-full top-0 w-full items-center"
      ></div>
      <MainSections>
        <FirstHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </FirstHeadings>
      </MainSections>
      <MainSections>
        <FirstHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </FirstHeadings>
      </MainSections>
      <MainSections>
        <FirstHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </FirstHeadings>
      </MainSections>
      <MainSections>
        <FirstHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </FirstHeadings>
      </MainSections>
    </>
  );
}

export default App;
