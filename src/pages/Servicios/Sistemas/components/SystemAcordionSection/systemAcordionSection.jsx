import { useState } from "react";
import Acordeon from "./componentAcordeon/Acordeon";

const SystemAcordionSection = () => {

    const[list] = useState([
        {
            question: '¿Cuanto tiempo lleva desarrollando un sitio web típico?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi.'
        },
        {
            question: '¿Pueden ayudarme con el diseño de mi sitio web o debo proporcionar mis propios diseños?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi.'
        },
        {
            question:'¿Cual es la diferencia entre sistema web, sitio web y software a medida?',
            answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi,'
        },
        {
            question:'¿Cómo se garantiza la seguridad de mi sitio web?',
            answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi.'
        }
    ]);

    return(
        <div className="bg-[#1E2B31] h-screen flex justify-center items-center">
            <div className="list">
                {/* begin intem*/}
                {
                    list.map((item, key) => (
                        <Acordeon key={key} datas={item}/>
                    ))
                }
                {/* end item */}
            </div>
        </div>
    )
}

export default SystemAcordionSection