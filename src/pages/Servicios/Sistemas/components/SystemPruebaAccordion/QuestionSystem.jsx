import { useAccordionSystemLogic } from "./constantsQuest";
import AccordionItemSys from "./systemAccordionPrueba";

function SystemPruebaAccordion(){
    const {accordionsSys, toggleAccordionSys} = useAccordionSystemLogic();
    return(
        <section className="bg-[#FFFFFF]">
            <div className="container mx-auto p-4 py-5">
            <h2 className="font-primary text-2xl font-bold mb-4 text-center text-emerald-600">PREGUNTAS FRECUENTES</h2>
            {accordionsSys.map((accordionsystem, index) => (
                <AccordionItemSys
                key={index}
                question={accordionsystem.question}
                answer={accordionsystem.answer}
                isOpen={accordionsystem.isOpen}
                onToggle={() => toggleAccordionSys(index)}
                />
            ))}
            </div>
        </section>
    );
}

export default SystemPruebaAccordion