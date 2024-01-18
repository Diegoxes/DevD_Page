
import { useState, useEffect } from "react";

const Strategies = () => {
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
      <div className="container mx-auto md:py-10">
         <h1 className="text-center text-3xl md:py-10 py-5 text-blue-dark">ESTRATEGIAS COMERCIALES</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 sm:p-6  gap-3 items-center justify-center">                       
              
              <div className="mx-auto rounded-full bg-blue-light p-[70px] h-80 w-80">
              <h2 className="text-center">SEGMENTACIÓN DE MERCADO</h2>
              <p className="text-center py-3">Dividir y definir grupos de consumidores similares para crear estrategias de marketing específicas.</p>
              </div>
              
              <div className={`card-container lg:gap-10 sm:p-6 ${scrollPosition < 2000 ? 'shift' : ''}`}>
              <div className="mx-auto rounded-full bg-[#00A2E0] p-[49px] h-80 w-80">
              <h2 className="text-center">POSICIONAMIENTO DE MARCA</h2>
              <p className="text-center py-3">Establecer la imagen y la posición de la marca en la mente de los consumidores en relación con la competencia, resaltando los atributos únicos y ventajas diferenciales.</p>
              </div>
              </div>
              
              <div className="mx-auto rounded-full bg-blue-light p-[49px] h-80 w-80">
              <h2 className="text-center">DESARROLLO DE PRODUCTOS</h2>
              <p className="text-center py-3">Crear nuevos productos o mejorar los existentes para satisfacer las necesidades y deseos de los consumidores. Esto puede implicar agregar nuevas características, cambios en envases o presentaciones.</p>
              </div>
              
              <div className={`card-container ${scrollPosition < 2000 ? 'shift-card4' : ''}`}>
              <div className="mx-auto rounded-full bg-[#00A2E0]  p-[79px] h-80 w-80">
              <h2 className="text-center">SEGMENTACIÓN DE MERCADO</h2>
              <p className="text-center py-3">Dividir y definir grupos de consumidores similares para crear estrategias de marketing específicas.</p>
              </div>
              </div>
              <div className={`card-container ${scrollPosition < 2000 ? 'shift-cards-5-6' : ''}`}>
              <div className="mx-auto rounded-full bg-blue-light p-[49px] h-80 w-80">
              <h2 className="text-center">POSICIONAMIENTO DE MARCA</h2>
              <p className="text-center py-3">Establecer la imagen y la posición de la marca en la mente de los consumidores en relación con la competencia, resaltando los atributos únicos y ventajas diferenciales.</p>
              </div>
              </div>
              <div className={`card-container ${scrollPosition < 2000 ? 'shift-cards-5-6' : ''}`}>
              <div className="mx-auto rounded-full bg-[#00A2E0]  p-[49px] h-80 w-80">
              <h2 className="text-center">DESARROLLO DE PRODUCTOS</h2>
              <p className="text-center py-3">Crear nuevos productos o mejorar los existentes para satisfacer las necesidades y deseos de los consumidores. Esto puede implicar agregar nuevas características, cambios en envases o presentaciones.</p>
              </div>
              </div>
            </div>     
       </div>
     );
}
 
export default Strategies;