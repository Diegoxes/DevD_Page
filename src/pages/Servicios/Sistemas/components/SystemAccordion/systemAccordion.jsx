import { useState } from "react";
import style from "../SystemAccordion/systemAccordion.module.css";

const SystemAccordion = () => {

    const [selected, setSelected] = useState(null)
    const toggle = (i) =>{
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <section className={style.container_section5}>
            <div className={style.accordion}>
                {data.map((item, i) => (
                    <div key={i} className={style.item}>
                        <div className={style.title} onClick={()=>toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div
                        className={
                            selected === i ? 'content show' : 'content'
                            }
                        >{item.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const data = [
    {
        question: '¿Cuanto tiempo lleva desarrollador un sitio web',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi, corrupti exercitationem? Pariatur',
    },

    {
        question: '¿Pueden ayudarme con el diseño de mi sitio web o debo proporcionar mis propios diseños?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi, corrupti exercitationem? Pariatur',
    },

    {
        question: '¿Cual es la diferencia entre un sistema web, sitio web y software a medida?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi, corrupti exercitationem? Pariatur',
    },

    {
        question: '¿Cómo se garantiza la seguridad de mi sitio web?',
        answer:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, quo rerum aliquid explicabo tempora dolor veniam culpa blanditiis aperiam iure eaque sit odio porro doloremque corporis animi, corrupti exercitationem? Pariatur',
    }
]

export default SystemAccordion;
