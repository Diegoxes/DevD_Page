import {FaChevronDown, FaChevronUp} from 'react-icons/fa'

function AccordionItem({ title, content, isOpen, onToggle, indices }) {
  return (
    <div className="rounded-xl mb-10 bg-primary p-2">
      <button
        className="w-full bg-primary p-4 text-center flex justify-between items-center"
        onClick={onToggle}
      >
        {title}
        <span className="text-xl right-0">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span> {/* Icono de flecha hacia arriba o abajo */}
      </button>
      {isOpen && (
        <div className="p-2 md:px-20 text-justify border-t-[1px] border-black">{content}
            {indices && indices.length > 0 && (
            <ul className="list-disc pl-5">
              {indices.map((index, i) => (
                <li key={i}>{index}</li>
              ))}
            </ul>
            )}
        </div>
      )}
    </div>
  );
}
export default AccordionItem;
