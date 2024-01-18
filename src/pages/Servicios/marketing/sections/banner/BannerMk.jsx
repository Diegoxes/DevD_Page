// import imgBaner from '@assets/mk-img/mk-baner.png'
import imgBaner from '../../../../../assets/mk-img/mk-baner.png'

import { useRef } from 'react';

const BannerMk = () => {
  const metasRef = useRef();

  const scrollToMetas = () => {
    metasRef.current.scrollIntoView({ behavior: 'smooth' });
  };

    return ( 
        <div className="relative">
          <img src={imgBaner} className="absolute inset-0 object-cover w-full h-[778px] z-10 opacity-60"/>
          <div className="max-container mx-auto h-[750px] relative z-20 flex flex-col justify-center items-center">
            <div className="text-center text-white">
              <h1 className="text-4xl">MARKETING DIGITAL</h1>
              <p className="text-2xl p-3 gap-3 py-16">REVOLUCIONAMOS TU MARCA Y GESTIONAMOS TU REDES SOCIALES DE UNA MANERA INNOVADORA Y CREATIVA</p>
              <div className="py-16">
                <button onClick={scrollToMetas} className="bg-slate-300 hover:bg-blue-700 text-black font-bold py-5 px-14 rounded-xl">
                  COMENCEMOS
                </button>
              </div>
              <div ref={metasRef}>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default BannerMk;