import React from "react";
import Header from "./components/header/Header.jsx";
import CoreConcept from "./components/coreConcept/CoreConcept.jsx";
import Examples from "./components/Examples.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))}
          </ul>
        </section>
        <Examples />
      </main>
    </>
  );
}

export default App;
