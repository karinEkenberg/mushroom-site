import React from "react";
import "./App.css";
import MainSections from "./components/MainSections.jsx";
import bgImage from "./assets/images/background.png";
function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-charcoal fixed -z-10 bg-repeat bg-[length:150px] h-full top-0 w-full items-center"
      ></div>
      <MainSections>
        <h1 className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </h1>
      </MainSections>
      <MainSections>
        <h2 className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </h2>
      </MainSections>
      <MainSections>
        <h2 className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </h2>
      </MainSections>
      <MainSections>
        <h2 className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </h2>
      </MainSections>
    </>
  );
}

export default App;
