import React, { useState } from "react";

import Section from "./Section";
import { accordionData } from "../../data/data";


const AccordionTW = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleSection = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  

  return (
    <div>
      {accordionData.map((section, index) => (
        <Section
          key={index}
          index={index}
          section={section}
          activeIndex={activeIndex}
          toggleSection={toggleSection}
        />
      ))}
    </div>
  );
};

export default AccordionTW;
