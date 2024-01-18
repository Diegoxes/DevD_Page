import { useAccordionLogic } from "./constans";
import AccordionItem from "./Function"; // Asegúrate de que el nombre del archivo coincida

function Questions() {
   const { accordions, toggleAccordion } = useAccordionLogic();
  return (
    <div className="container mx-auto p-4 py-5">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-light">Preguntas frecuentes</h1>
      {accordions.map((accordion, index) => (
        <AccordionItem
          key={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={accordion.isOpen}
          onToggle={() => toggleAccordion(index)}
          indices={accordion.indices}
        />
      ))}
    </div>
  );
}

export default Questions;
