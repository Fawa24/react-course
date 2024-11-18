import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section/Section";

export default function CoreConcepts() {
  return(
    <Section title={'Core concepts'} id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
      </ul>
    </Section>
  );
}