import React from "react";
import "./App.css";
import Mainsections from "./components/mainsections";
function App() {
  return (
    <>
      <div className="bg-[url('./src/assets/images/background.png')] bg-charcoal bg-repeat bg-[length:150px] h-96 w-full items-center">
        <Mainsections>
          <h1 className="text-3xl font-bold text-olive text-center">
            Karins Svampar
          </h1>
        </Mainsections>
        <Mainsections>
          <h2 className="text-3xl font-bold text-olive text-center">
            Karins Svampar
          </h2>
        </Mainsections>
      </div>
    </>
  );
}

export default App;
