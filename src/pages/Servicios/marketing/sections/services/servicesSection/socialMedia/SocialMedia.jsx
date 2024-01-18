// import marca from '@assets/mk-img/mk-marca.png'
import marca from '../../../../../../../assets/mk-img/mk-marca.png';
// import digital from '@assets/mk-img/mk-digitales.png'
import digital from '../../../../../../../assets/mk-img/mk-digitales.png';
// import reporte from '@assets/mk-img/mk-reportes.png'
import reporte from '../../../../../../../assets/mk-img/mk-reportes.png';

const SocialMedia = () => {
    return ( 
        <div className="container mx-auto py-10 p-6">
          <h1 className="text-center text-3xl text-blue-light">CREACIÓN Y CAMPAÑAS EN REDES SOCIALES</h1>
          <div>
            <p className="p-5 text-center">Las campañas publicitarias en redes sociales permite desarrollar una gran variedad de estrategias efectivas ideales para promocionar productos y servicios. Este servicio incluye:</p>
             <div className="grid md:grid-cols-3 gap-10 py-5">
                <div className="flex flex-col justify-center items-center">
                  <p>Community Managment y Gestión de Marca</p>
                  <img src={marca} />
                  <p>Gestionamos las redes sociales de tu marca y administramos tu comunidad</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p>Campañas Publicitarias Digitales</p>
                  <img src={digital}/>
                  <p>Ejecutamos campañas publicitarias en rrss en base a estrategias de segmentación</p>
                 </div>
                <div className="flex flex-col justify-center items-center">
                  <p>Análisis y Reportes de Resultados</p>
                  <img src={reporte}/>
                  <p>Reportes periódicos y recolección de datos claves sobre la publicidad en línea</p>
                </div>
             </div>
          </div>
       </div>
     );
}
 
export default SocialMedia;