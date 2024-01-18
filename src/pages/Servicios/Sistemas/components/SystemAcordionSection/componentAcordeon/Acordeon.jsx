import { useState } from "react";
const Acordeon = (props) => {
    const [item,setItem] = useState(props.datas);
    const handletoggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item,active:newActive});
    };
    return (
        <div className={`bg-[#2EAF7D] p-5 border mb-5 border-[#c9c6c655] rounded-md w-[950px] duration-500 group ${item.active === 1 ? 'is-active': ''}`}>
            <div className="flex items-center">
                <div className="text-white w-full duration-500 group-[.is-active]:font-bold text-center">
                    {item.question}
                </div>
                <div className="text-white text-xl duration-500 cursor-pointer group-[.is-active]:rotate-[180deg]"onClick={handletoggleActive}>
                    v
                </div>
            </div>
            <div className="text-white overflow-hidden max-h-0 duration-500 group-[.is-active]:max-h-[100px]">
                {item.answer}
            </div>
        </div>
    );
};

export default Acordeon;
