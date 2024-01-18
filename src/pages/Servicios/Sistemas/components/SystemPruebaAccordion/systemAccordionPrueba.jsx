import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function AccordionItemSys({question, answer , isOpen, onToggle}){
    return(
        <div className="rounded-xl mb-10 bg-[#42D7A1] p-2">
            <button
            className="w-full bg-[#42D7A1] p-4 text-center flex justify-between items-center"
            onClick={onToggle}>
                <h2 className="font-primary text-sky-700 ">{question}</h2>
                <span className=" text-sky-700 text-xl right-0">{isOpen ? <FaChevronUp/> : <FaChevronDown/>}</span>
            </button>
            {isOpen && (
                <div className="font-primary text-sky-700 p-2 md:px-20 text-justify border-t-[1px] border-white">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default AccordionItemSys