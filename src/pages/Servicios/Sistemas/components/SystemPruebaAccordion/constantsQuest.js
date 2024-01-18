import { useState } from "react";

export const AccordionsSystem = [
    {
        question:"¿Cuánto tiempo lleva desarrollando un sitio web típico?",
        answer: "El tiempo que lleva desarrollar un sitio web típico puede variar dependiendo de varios factores, como la complejidad y funcionalidades del sitio, el tamaño del equipo de desarrollo, la disponibilidad de contenido y los recursos necesarios. Sin embargo, en general, el desarrollo de un sitio web puede tomar desde 2 a 8 semanas aproximadamente.",
        isOpen: false
    },
    {
        question: "¿Pueden ayudarme con el diseño de mi sitio web o debo proporcionar mis propios diseños?",
        answer: "¡Claro que sí! En Devdatep Consulting trabajamos con diversas áreas de diseño para poder crear tu página desde 0, no usamos plantillas online ni predeterminadas. De esta manera garantizamos un trabajo completamente personalizado a gusto del cliente.",
        isOpen: false
    },
    {
        question:"¿Cúal es la diferencia entre sistema web, sitio web y software a medida?",
        answer: "Un Sitio web únicamente es una página donde se promocionan los servicios que tiene una empresa para poder darse a conocer y postear contenid, sin embargo aún no tienen una gestión de los mismos. Un software es el sistema que maneja cada empresa para realizar sus respectivos procesos de trabajo o flujos. Mientras que un sistema web es el motor que gestiona uno o más procesos que tengas en tu empresa, usando el software de elección para las actividades a realizar, como gestión de inventarios, e-commerce, etc.",
        isOpen: false
    },
    {
        question: "¿Cómo se garantiza la seguridad de mi sitio web?",
        answer: "Ofrecemos un dominio (nombre unico e irrepetible que se le da a un sitio en internet para que los marcas sean identificados de forma comoda y sencilla por usuarios), y protocolo https (Protocolo de transferencia de hipertexto seguro, es el principal protocolo utilizado para enviar datos entre un navegador y un sitio web, seguridad al 100% en transeferencia de datos).",
        isOpen: false
    }
];


export const useAccordionSystemLogic = () => {
    const [accordionsSys, setAccordionSys] = useState(AccordionsSystem);
    const toggleAccordionSys = (index) => {
        const updatedAccordionSys = [...accordionsSys];
        updatedAccordionSys.forEach((accordionsystem, i)=>{
            if(i === index){
                accordionsystem.isOpen = !accordionsystem.isOpen;
            }else{
                accordionsystem.isOpen = false;
            }
        });
        setAccordionSys(updatedAccordionSys);
    };
    return{accordionsSys, toggleAccordionSys};
};