import { useState } from "react";
import TabButtons from "./tabButtons/TabButtons.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function Examples() {
  const [selectTopic, setSelectTopic] = useState(null);

  function handleSelect(selectButton) {
    setSelectTopic(selectButton);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButtons
              isSelected={selectTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButtons>
          </>
        }
      >
        {selectTopic === null ? (
          <p>Please select a valid topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
