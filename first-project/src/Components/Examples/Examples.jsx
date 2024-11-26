import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";
import Tabs from "../Tabs.jsx/Tabs";

export default function Examples() {
  const [selectedTab, setselectedTab ] = useState();

  function clickHandler(selectedTab) {
    setselectedTab(selectedTab);
  }

  let tabContent = (selectedTab &&
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTab].title}</h3>
      <p>{EXAMPLES[selectedTab].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTab].code}</code>
      </pre>
    </div>);

  return(
    <>
    <Section title={'Examples'}id="examples">
      <Tabs 
      buttons={
        <><TabButton onClick={() => clickHandler('components')} isSelected={selectedTab === 'components'}>Components</TabButton>
          <TabButton onClick={() => clickHandler('jsx')} isSelected={selectedTab === 'jsx'}>JSX</TabButton>
          <TabButton onClick={() => clickHandler('props')} isSelected={selectedTab === 'props'}>Props</TabButton>
          <TabButton onClick={() => clickHandler('state')}  isSelected={selectedTab === 'state'}>State</TabButton>
        </>}
      buttonsContainer={'menu'}>
      {tabContent}
      {!selectedTab && <p>Please select one of the topic above to display info about.</p>}
      </Tabs>
    </Section>
    </>
  );
}