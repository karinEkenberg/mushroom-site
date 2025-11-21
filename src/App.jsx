import React from "react";
import "./App.css";
import Mainsections from "./components/mainsections";
function App() {
  return (
    <>
      <div className="bg-[url('./src/assets/images/background.png')] bg-charcoal bg-repeat bg-[length:150px] h-96 w-full flex items-center">
        <Mainsections>
          <h1 className="text-3xl font-bold text-olive">Karins Svampar</h1>
        </Mainsections>
      </div>
    </>
  );
}

export default App;
