import { useState, useEffect, useRef } from "react";

const Optimization = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const contentContainerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!animationStarted && contentContainerRef.current) {
        const rect = contentContainerRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          setAnimationStarted(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationStarted]);

  return (
    <section className="bg-gray-200">
      <div className="container mx-auto py-16 ">
        <h1 className="text-center text-3xl text-primary">
          OPTIMIZACIÓN EN BUSCADORES
        </h1>
        <div className="w-9/12 mx-auto">
          <p className="py-5 text-center">
            La optimización en buscadores (SEO) y el marketing en buscadores
            (SEM) son dos estrategias clave en el ámbito del marketing digital.
          </p>
          <div
            ref={contentContainerRef}
            className="flex flex-wrap lg:gap-10 sm:p-6  gap-3 items-center justify-center"
          >
            <div
              className={`mx-auto rounded-full bg-blue-light left-0 p-[49px] md:h-80 h-72 md:w-80 w-72 transition-transform duration-1000 ease-in-out transform ${
                animationStarted ? "translate-x-0" : "md:-translate-x-[550px] "
              }`}
            >
              <p className="text-center ">
                SEO implica aplicar estrategias para mejorar la visibilidad en
                motores de búsqueda y la posición en los resultados orgánicos.
                Su objetivo es aumentar el tráfico web al destacar en búsquedas
                clave.
              </p>
            </div>
            <div
              className={`mx-auto rounded-full bg-blue-light right-0 p-[49px] md:h-80 h-72 md:w-80 w-72 transition-transform duration-1000 ease-in-out transform ${
                animationStarted ? "translate-x-0" : "md:translate-x-[550px]"
              }`}
            >
              <p className="text-center ">
                SEM: Se refiere a la promoción de un sitio web en los motores de
                búsqueda a través de anuncios pagados. Realizándose a través de
                plataformas de publicidad como Google Ads.
              </p>
            </div>
          </div>
          <p className="text-center pt-4">
            Si bien tanto SEO como SEM buscan aumentar la visibilidad de un
            sitio web en los motores de búsqueda, difieren en su enfoque y
            costo. El SEO implica un trabajo continuo y a largo plazo para
            mejorar la visibilidad orgánica, mientras que el SEM ofrece
            resultados más rápidos pero implica un presupuesto para pagar por
            los anuncios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Optimization;
