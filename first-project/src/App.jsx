import { CORE_CONCEPTS } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept/CoreConcept";
import TabButton from "./Components/TabButton/TabButton";

function App() {
  function clickHandler() {
    
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
            <TabButton onClick={clickHandler}>Components</TabButton>
            <TabButton onClick={clickHandler}>JSX</TabButton>
            <TabButton onClick={clickHandler}>Props</TabButton>
            <TabButton onClick={clickHandler}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;