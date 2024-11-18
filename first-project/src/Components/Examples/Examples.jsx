import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [selectedTab, setselectedTab ] = useState();

  function clickHandler(selectedTab) {
    setselectedTab(selectedTab);
  }

  return(
    <>
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
    </>
  );
}