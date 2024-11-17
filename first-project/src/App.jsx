import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept/CoreConcept";
import TabButton from "./Components/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [selectedTab, setselectedTab ] = useState('components');

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
            <TabButton onClick={() => clickHandler('components')}>Components</TabButton>
            <TabButton onClick={() => clickHandler('jsx')}>JSX</TabButton>
            <TabButton onClick={() => clickHandler('props')}>Props</TabButton>
            <TabButton onClick={() => clickHandler('state')}>State</TabButton>
          </menu>
        </section>
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}

export default App;