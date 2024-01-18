import CardProyect from "../components/CardProyect";

function Proyectos() {
    return (
      <div className="flex flex-col items-center p-14">
        <p className="font-primary text-center">NUESTROS</p>
        <h2 className="font-primary text-center text-3xl">PROYECTOS POR CATEGORÍA</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <CardProyect titulo={"Paginas Web"}/>
          <CardProyect titulo={"Eccomerce"}/>
          <CardProyect titulo={"Aplicaciones"}/>
          <CardProyect titulo={"Software"}/>
          <CardProyect titulo={"Marketing Digital"}/>
          <CardProyect titulo={"Branding"}/>
        </div>
      </div>
    )
  }
  
  export default Proyectos;
  