// import ImagenPredeterminada1 from "@assets/image_pre_portafolio.svg";
import ImagenPredeterminada1 from '../../../assets/image_pre_portafolio.svg'
// import FlechaDerecha from "@assets/icons/right-arrow-white.png";
import FlechaDerecha from '../../../assets/icons/right-arrow-white.png'

// eslint-disable-next-line react/prop-types
function CardProyect({ titulo }) {
  return (
    <div className="max-w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-6 bg-gradient-to-b from-[#2EAF7D] to-[#44934299] text-white shadow-md rounded-xl overflow-hidden mt-10 mb-4">
      <div className="p-4 mt-14 flex justify-center items-center h-60">
        <img
          className="object-cover object-center"
          src={ImagenPredeterminada1}
          alt="Proyecto Imagen"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="font-primary text-xl">{titulo}</h2>
        <a
          href="#"
          className="mt-4 mb-4 bg-black font-primary text-xl py-1 px-6 rounded-full inline-flex items-center justify-center hover:bg-yellow-400 whitespace-nowrap"
        >
          <span className="mr-2">Ver proyectos</span>
          <img
            className="w-10 h-10"
            src={FlechaDerecha}
            alt="Icono Ver Proyectos"
          />
        </a>
      </div>
    </div>
  );
}

export default CardProyect;
