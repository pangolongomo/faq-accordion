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
  return (
    <div>
      {data.map((e) => (
        <AccordionItem key={e.id} values={e} />
      ))}
    </div>
  );
}

export default Accordion;
