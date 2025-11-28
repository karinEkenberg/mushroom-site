import React from "react";
import "./App.css";
import MainSections from "./components/MainSections.jsx";
import bgImage from "./assets/images/background.png";
import FirstHeadings from "./components/FirstHeadings.jsx";
import SecondHeadings from "./components/SecondHeadings.jsx";
import Breadtext from "./components/Breadtext.jsx";
import Buttons from "./components/Buttons.jsx";
import Footer from "./components/Footer.jsx";
import Images from "./components/Images.jsx";
import forest from "./assets/images/forest.jpg";
import SplitSections from "./components/SplitSections.jsx";

function App() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-charcoal fixed -z-10 bg-repeat bg-[length:150px] h-full top-0 w-full items-center"
      ></div>
      <MainSections>
        <SplitSections>
          <div>
            <FirstHeadings className="text-3xl font-bold text-olive text-center">
              Karins Svampar
            </FirstHeadings>
            <Breadtext>
              Välkommen till Karins Svampar! Upptäck en värld av svampar genom
              Karins passion och expertis. Utforska våra guider, recept och tips
              för att plocka, identifiera och tillaga svampar på bästa sätt.
            </Breadtext>
            <Buttons>Utforska Nu</Buttons>
          </div>
          <Images src={forest} alt="forest" />
        </SplitSections>
      </MainSections>
      <MainSections>
        <SplitSections>
          <Images src={forest} alt="forest" />
          <div>
            <SecondHeadings className="text-3xl font-bold text-olive text-center">
              Karins Svampar
            </SecondHeadings>
            <Breadtext>
              Välkommen till Karins Svampar! Upptäck en värld av svampar genom
              Karins passion och expertis. Utforska våra guider, recept och tips
              för att plocka, identifiera och tillaga svampar på bästa sätt.
            </Breadtext>
            <Buttons>Utforska Nu</Buttons>
          </div>
        </SplitSections>
      </MainSections>
      <MainSections>
        <SplitSections>
          <div>
            <SecondHeadings className="text-3xl font-bold text-olive text-center">
              Karins Svampar
            </SecondHeadings>
            <Breadtext>
              Välkommen till Karins Svampar! Upptäck en värld av svampar genom
              Karins passion och expertis. Utforska våra guider, recept och tips
              för att plocka, identifiera och tillaga svampar på bästa sätt.
            </Breadtext>
            <Buttons>Utforska Nu</Buttons>
          </div>
          <Images src={forest} alt="forest" />
        </SplitSections>
      </MainSections>
      <MainSections>
        <SplitSections>
          <Images src={forest} alt="forest" />
          <div>
            <SecondHeadings className="text-3xl font-bold text-olive text-center">
              Karins Svampar
            </SecondHeadings>
            <Breadtext>
              Välkommen till Karins Svampar! Upptäck en värld av svampar genom
              Karins passion och expertis. Utforska våra guider, recept och tips
              för att plocka, identifiera och tillaga svampar på bästa sätt.
            </Breadtext>
            <Buttons>Utforska Nu</Buttons>
          </div>
        </SplitSections>
      </MainSections>
      <MainSections>
        <SplitSections>
          <div>
            <SecondHeadings className="text-3xl font-bold text-olive text-center">
              Karins Svampar
            </SecondHeadings>
            <Breadtext>
              Välkommen till Karins Svampar! Upptäck en värld av svampar genom
              Karins passion och expertis. Utforska våra guider, recept och tips
              för att plocka, identifiera och tillaga svampar på bästa sätt.
            </Breadtext>
            <Buttons>Utforska Nu</Buttons>
          </div>
          <Images src={forest} alt="forest" />
        </SplitSections>
      </MainSections>
      <MainSections>
        <SplitSections>
          <Images src={forest} alt="forest" />
          <div>
            <SecondHeadings className="text-3xl font-bold text-olive text-center">
              Karins Svampar
            </SecondHeadings>
            <Breadtext>
              Välkommen till Karins Svampar! Upptäck en värld av svampar genom
              Karins passion och expertis. Utforska våra guider, recept och tips
              för att plocka, identifiera och tillaga svampar på bästa sätt.
            </Breadtext>
            <Buttons>Utforska Nu</Buttons>
          </div>
        </SplitSections>
      </MainSections>
      <MainSections>
        <SplitSections>
          <div>
            <SecondHeadings className="text-3xl font-bold text-olive text-center">
              Karins Svampar
            </SecondHeadings>
            <Breadtext>
              Välkommen till Karins Svampar! Upptäck en värld av svampar genom
              Karins passion och expertis. Utforska våra guider, recept och tips
              för att plocka, identifiera och tillaga svampar på bästa sätt.
            </Breadtext>
            <Buttons>Utforska Nu</Buttons>
          </div>

          <Images src={forest} alt="forest" />
        </SplitSections>
      </MainSections>
      <Footer />
    </>
  );
}

export default App;
