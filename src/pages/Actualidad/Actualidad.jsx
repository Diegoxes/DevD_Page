import { useState } from "react";

// import Footer from "@src/components/Footer";
import Footer from "../../components/Footer";
// import NavBar from "@src/components/NavBar";
import NavBar from "../../components/NavBar";
import Trends from "./sections/trends/Trends";
import Cases from "./sections/cases/Cases";
import Tips from "./sections/tips/Tips";
import Information from "./sections/information/Information";

// import tendencia from '@assets/actualidad-img/tendencias-img.png'
import tendencia from '../../assets/actualidad-img/tendencias-img.png'
// import casos from '@assets/actualidad-img/casos-img.png'
import casos from '../../assets/actualidad-img/casos-img.png'
// import tips from '@assets/actualidad-img/tips-img.png'
import tips from '../../assets/actualidad-img/tips-img.png'
// import informacion from '@assets/actualidad-img/informacion-img.png'
import informacion from '../../assets/actualidad-img/informacion-img.png'

const Actualidad = () => {
  const [componentTendencia, setcomponentTendencia] = useState(false);
  const [componentCasos, setcomponentCasos] = useState(false);
  const [componentTips, setcomponentTips] = useState(false);
  const [componentInformacion, setcomponentInformacion] = useState(false);

  const handleClickTendencia = () => {
    setcomponentTendencia(true)
    setcomponentCasos(false);
    setcomponentTips(false);
    setcomponentInformacion(false);
  };
  const handleClickCasos = () => {
    setcomponentTendencia(false)
    setcomponentCasos(true);
    setcomponentTips(false);
    setcomponentInformacion(false);
  };
  const handleClickTips = () => {
    setcomponentTendencia(false)
    setcomponentCasos(false);
    setcomponentTips(true);
    setcomponentInformacion(false);
  };
  const handleClickInformacion = () => {
    setcomponentTendencia(false)
    setcomponentCasos(false);
    setcomponentTips(false);
    setcomponentInformacion(true);
  };


    return ( 
        <>
            <NavBar show={true} />
            <div className="container mx-auto py-28 gap-3 flex flex-wrap justify-center items-center">
                <div className="flex flex-col items-center">
                    <button className="flex flex-col rounded-t-3xl w-[290px] h-[356px] justify-center items-center border border-primary" 
                    onClick={handleClickTendencia}
                    >Tendencias
                    <img src={tendencia} className="mt-10"/>
                    </button>
                    {componentTendencia && <Trends />}
                </div>
                <div className="flex flex-col items-center">
                    <button className="flex flex-col rounded-t-3xl w-[290px] h-[356px] justify-center items-center border border-primary"
                     onClick={handleClickCasos} >Casos
                    <img src={casos} className="mt-10" />
                    </button>
                     {componentCasos && <Cases />}
                </div>
                <div className="flex flex-col items-center">
                    <button className="flex flex-col rounded-t-3xl w-[290px] h-[356px] justify-center items-center border border-primary"
                    onClick={handleClickTips}>Tips
                    <img src={tips} />
                    </button>
                     {componentTips && <Tips />}
                </div>
                 <div className="flex flex-col items-center">
                    <button className="flex flex-col rounded-t-3xl w-[290px] h-[356px] justify-center items-center border border-primary"
                    onClick={handleClickInformacion}>Información Importante
                    <img src={informacion} />
                    </button>
                    {componentInformacion && <Information />}
                </div>
            </div>
            
            <Footer />
        </>
     );
}
 
export default Actualidad;