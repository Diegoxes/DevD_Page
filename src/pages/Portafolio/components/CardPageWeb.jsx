// import ImagenPredeterminada2 from "@assets/pred-page-web.png";
import ImagenPredeterminada2 from '../../../assets/pred-page-web.png'

function CardPageWeb() {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="h-38 bg-gray-300 flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src={ImagenPredeterminada2}
          alt="Imagen de la página web"
        />
      </div>
      <div className="p-8 text-center">
        <h2 className="font-primary text-xl font-semibold mb-2">Proyecto</h2>
        <p className="font-primary text-gray-700 mb-4">Empresa name</p>
        <a
          href="#"
          className="bg-[#00619A] text-white font-primary text-xs py-2 px-8 rounded-md inline-block hover:bg-blue-700"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}

export default CardPageWeb;
