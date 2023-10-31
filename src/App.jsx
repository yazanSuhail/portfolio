import { useState } from "react";

import "./App.css";
import Header from "./components/MainStartMenu";
import WindowsXPModal from "./components/Modals";

function App() {
  return (
    <>
      <Header />
      <WindowsXPModal
        title={"My shit"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit atque at ipsa, quaerat voluptatum ratione, exercitationem voluptatibus cum labore praesentium? Voluptates a laborum ea delectus quae quibusdam, dolore sapiente."
        }
      />
    </>
  );
}

export default App;
