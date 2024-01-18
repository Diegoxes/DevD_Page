import { useState, useEffect } from 'react';

// import imgMeta from '@assets/mk-img/mk-metas.png'
import imgMeta from '../../../../../../../assets/mk-img/mk-metas.png'

const Metas = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 550) {
      setIsVisible(true);
    } 
  };
  
    return ( 
        <section className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto pt-9">
                <div className="md:h-[530px] grid lg:grid-cols-2 md:gap-0 gap-4 mx-auto w-11/12 m-0">
                    <div className="flex flex-col justify-center items-center mx-auto">
                        <h1 className="text-3xl  text-green-600 p-2 flex mx-auto justify-center items-center">ALCANZA TUS METAS CON NUESTRAS ESTRATEGIAS</h1>
                        <p className="p-2 flex mx-auto justify-center items-center">Prepara a tu negocio para el éxito. Nuestro equipo diseña estrategias 
                        efectivas y aplica las herramientas necesarias para expandir tu marca en 
                        todos los horizontes, aprovechando el potencial de la era digital.</p>
                    </div>

                    <div className="flex flex-col justify-center items-center mx-auto">
                        <div className="mx-auto rounded-full bg-green-600  h-80 w-80 flex items-center justify-center">
                        <img src={imgMeta} className="flex items-center justify-center "/>
                        </div>
                    </div>
                </div>
            </div>
       </section>
     );
}
 
export default Metas;