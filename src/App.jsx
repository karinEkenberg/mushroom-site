import React from "react";
import "./App.css";
import  MainSections from "./components/MainSections.jsx";
function App() {
  return (
    <>
      <div className="bg-[url('./src/assets/images/background.png')] bg-charcoal bg-repeat bg-[length:150px] h-96 w-full items-center">
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
      </div>
    </>
  );
}

export default App;
