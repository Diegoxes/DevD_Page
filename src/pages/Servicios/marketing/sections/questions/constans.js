import { useState } from "react";

export const initialAccordions = [
  {
    title: "¿Ofrecen servicios de SEO para mejorar mi clasificación en los motores de búsqueda?",
    content: "¡Así es! Analizamos su mercado objetivo obteniendo datos estadísticos sobre la cantidad y calidad de las búsquedas realizadas en Google relativas a su sector, y definimos aquellas búsquedas para las cuales nos interesa que la web de la empresa aparezca entre los resultados de búsqueda. Trabajamos con optimización On-site, Marketing de contenidos y optimización Off-site.",
    isOpen: false
  },
  {
    title: "¿Ofrecen servicios de publicidad en línea, como Google Ads o anuncios en redes sociales?",
    content: "Sí, nuestro equipo está capacitado para crear contenido en distintos formatos y plataformas. Asimismo, podemos emitir dicho contenido en las distintas redes sociales de acuerdo a los objetivos de la marca, ya sea a través de publicidad orgánica o pagada.",
    isOpen: false
  },
  {
    title: "¿Cómo medirán el éxito de mis campañas publicitarias digitales?",
    content:
      "Contamos con múltiples herramientas de acuerdo a los objetivos comerciales de la publicidad y la marca. Las más básicas son:",
    indices: [
      "Herramientas Ads: Para inferir métricas y datos relevantes",
      "Impresiones y Alcance: Conocer la cantidad de veces que se mostró y que se visualizó con éxito la publicidad.",
      "Tasas de conversión: Con el fin de evaluar la proporción de público que realizó la acción deseada como suscribirse, realizar una compra, etc."
    ],
    isOpen: false
  }
];


export const useAccordionLogic = () => {
  const [accordions, setAccordions] = useState(initialAccordions);

  const toggleAccordion = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions.forEach((accordion, i) => {
      if (i === index) {
        accordion.isOpen = !accordion.isOpen;
      } else {
        accordion.isOpen = false;
      }
    });
    setAccordions(updatedAccordions);
  };

  return { accordions, toggleAccordion };
};