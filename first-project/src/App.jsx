import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept/CoreConcept";
import TabButton from "./Components/TabButton/TabButton";
import { useState } from "react";

function App() {
  const [selectedTab, setselectedTab ] = useState();

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
            {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => clickHandler('components')} isSelected={selectedTab === 'components'}>Components</TabButton>
            <TabButton onClick={() => clickHandler('jsx')} isSelected={selectedTab === 'jsx'}>JSX</TabButton>
            <TabButton onClick={() => clickHandler('props')} isSelected={selectedTab === 'props'}>Props</TabButton>
            <TabButton onClick={() => clickHandler('state')}  isSelected={selectedTab === 'state'}>State</TabButton>
          </menu>
        </section>
        {selectedTab && 
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>}
        {!selectedTab && <p>Please select one of the topic above to display info about.</p>}
      </main>
    </div>
  );
}

export default App;