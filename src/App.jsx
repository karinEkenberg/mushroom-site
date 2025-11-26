import React from "react";
import "./App.css";
import MainSections from "./components/MainSections.jsx";
import bgImage from "./assets/images/background.png";
import FirstHeadings from "./components/FirstHeadings.jsx";
import SecondHeadings from "./components/SecondHeadings.jsx";
import Breadtext from "./components/Breadtext.jsx";
import Buttons from "./components/Buttons.jsx";
import Footer from "./components/Footer.jsx";

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
        <Breadtext>
          Välkommen till Karins Svampar! Upptäck en värld av svampar genom
          Karins passion och expertis. Utforska våra guider, recept och tips för
          att plocka, identifiera och tillaga svampar på bästa sätt.
        </Breadtext>
        <Buttons>Utforska Nu</Buttons>
      </MainSections>
      <MainSections>
        <SecondHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </SecondHeadings>
        <Breadtext>
          Välkommen till Karins Svampar! Upptäck en värld av svampar genom
          Karins passion och expertis. Utforska våra guider, recept och tips för
          att plocka, identifiera och tillaga svampar på bästa sätt.
        </Breadtext>
      </MainSections>
      <MainSections>
        <SecondHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </SecondHeadings>
        <Breadtext>
          Välkommen till Karins Svampar! Upptäck en värld av svampar genom
          Karins passion och expertis. Utforska våra guider, recept och tips för
          att plocka, identifiera och tillaga svampar på bästa sätt.
        </Breadtext>
      </MainSections>
      <MainSections>
        <SecondHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </SecondHeadings>
        <Breadtext>
          Välkommen till Karins Svampar! Upptäck en värld av svampar genom
          Karins passion och expertis. Utforska våra guider, recept och tips för
          att plocka, identifiera och tillaga svampar på bästa sätt.
        </Breadtext>
      </MainSections>
      <MainSections>
        <SecondHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </SecondHeadings>
        <Breadtext>
          Välkommen till Karins Svampar! Upptäck en värld av svampar genom
          Karins passion och expertis. Utforska våra guider, recept och tips för
          att plocka, identifiera och tillaga svampar på bästa sätt.
        </Breadtext>
      </MainSections>
      <MainSections>
        <SecondHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </SecondHeadings>
        <Breadtext>
          Välkommen till Karins Svampar! Upptäck en värld av svampar genom
          Karins passion och expertis. Utforska våra guider, recept och tips för
          att plocka, identifiera och tillaga svampar på bästa sätt.
        </Breadtext>
      </MainSections>
      <MainSections>
        <SecondHeadings className="text-3xl font-bold text-olive text-center">
          Karins Svampar
        </SecondHeadings>
        <Breadtext>
          Välkommen till Karins Svampar! Upptäck en värld av svampar genom
          Karins passion och expertis. Utforska våra guider, recept och tips för
          att plocka, identifiera och tillaga svampar på bästa sätt.
        </Breadtext>
      </MainSections>
      <Footer />
    </>
  );
}

export default App;
