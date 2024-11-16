import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept/CoreConcept";
import TabButton from "./Components/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [ selectedTab, setselectedTab ] = useState('Components');

  function clickHandler(selectedTab) {
    setselectedTab(selectedTab);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => clickHandler('Components')}>Components</TabButton>
            <TabButton onClick={() => clickHandler('JSX')}>JSX</TabButton>
            <TabButton onClick={() => clickHandler('Props')}>Props</TabButton>
            <TabButton onClick={() => clickHandler('State')}>State</TabButton>
          </menu>
        </section>
        <p>{selectedTab}</p>
      </main>
    </div>
  );
}

export default App;