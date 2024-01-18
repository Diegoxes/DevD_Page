import { useState, useEffect, useRef } from 'react';

const Analytics = () => {

      const [animationStarted, setAnimationStarted] = useState(false);
  const contentContainerRef  = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationStarted && contentContainerRef .current) {
        const rect = contentContainerRef .current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          setAnimationStarted(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationStarted]);

    return ( 
     <section className="bg-gray-300">
          <div className="container mx-auto py-10">
               <h1 className="text-center text-3xl text-blue-dark">ANALÍTICA WEB</h1>
               <p className="text-center p-4">El objetivo principal de la analítica web es comprender cómo los visitantes interactúan con un sitio web, qué acciones realizan, cómo llegaron al sitio, qué contenido consumen y qué factores pueden estar afectando su experiencia de usuario. Esta información es vital para tomar decisiones informadas y optimizar el rendimiento de un sitio web.</p>
               <div ref={contentContainerRef } 
                 className="gap-10 flex flex-col py-10 ">
                    <div className={`mx-auto rounded-full bg-blue-light p-[35px] h-[320px] w-[320px] transition-transform duration-1000 ease-in-out transform ${
                      animationStarted ? 'translate-x-0' : 'md:-translate-x-[550px] -translate-x-[50px]'}`}>
                         <h4 className="text-center">CONVERSIONES</h4>
                         <p className="text-center">Una conversión puede ser cualquier acción deseada en el sitio web, como una venta, una suscripción a un boletín informativo o el envío de un formulario. El seguimiento de las conversiones ayuda a medir el rendimiento de las campañas y optimizar la tasa de conversión.</p>
                    </div>
                    <div className={`mx-auto rounded-full bg-blue-500 p-[49px] h-[285px] w-[285px] transition-transform duration-1000 ease-in-out transform ${
                      animationStarted ? 'translate-x-0' : 'md:translate-x-[550px]'}`}>
                         <h4 className="text-center">NÚMERO DE VISITANTES</h4>
                         <p className="text-center">Mide la cantidad de usuarios que acceden al sitio web en un período de tiempo determinado.</p>
                    </div>
                    <div className={`mx-auto rounded-full bg-blue-600 p-[49px] h-[250px] w-[250px] transition-transform duration-1000 ease-in-out transform ${
                      animationStarted ? 'translate-x-0' : 'md:-translate-x-[550px]'}`}>
                         <h4 className="text-center">TASA DE REBOTE</h4>
                         <p className="text-center">Muestra el porcentaje de visitantes que abandonan el sitio después de ver sólo una página.</p>
                    </div>
                    <div className={`mx-auto rounded-full bg-blue-700 p-[49px] h-[220px] w-[220px] transition-transform duration-1000 ease-in-out transform ${
                      animationStarted ? 'translate-x-0' : 'md:translate-x-[550px]'}`}>
                         <h4 className="text-center">TASAS VISTAS</h4>
                         <p className="text-center">Indica la cantidad de páginas que los usuarios han visitado.</p>
                    </div>
                    <div className={`mx-auto rounded-full bg-blue-800 p-[25px] h-[185px] w-[185px] transition-transform duration-1000 ease-in-out transform ${
                      animationStarted ? 'translate-x-0' : 'md:-translate-x-[550px]'}`}>
                         <h4 className="text-center">TIEMPO EN EL SITIO</h4>
                         <p className="text-center">Cuánto tiempo promedio pasan los usuarios en el sitio.</p>
                    </div>
               </div>
          </div>
     </section>
     );
}
 
export default Analytics;