import { useState } from "react";
import AccordionItem from "./content/AccordionItem";

type AccordionElement = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  data: Array<AccordionElement>;
};

function Accordion({ data }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {data.map((e) => (
        <AccordionItem
          key={e.id}
          values={e}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}

export default Accordion;
