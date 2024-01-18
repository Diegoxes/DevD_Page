import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import "./Proyecto.css"

function Proyecto() {
  return (
    <>
         <Sidebar/>
      <div className="containerPerfil">
        <div className="container2">
          <img className="imgPerson"src="src\assets\zona-cliente-perfil-img\VectorPerfil.png" />

          <div className="cajaPerfil">
            <div className="perfilContent">
              <h2>PERFIL</h2>
              <img
                className="btnflecha"
                src="src\assets\zona-cliente-perfil-img\Vector.png"
              />
            </div>
            <hr className="lineaAqua"></hr>
          </div>
          <div className="cajaProyecto">
            <div className="proyectContent">
              <h2>PROYECTOS</h2>
              <img
                className="btnflecha"
                src="src\assets\zona-cliente-perfil-img\Vector.png"
              />
            </div>
            <hr className="lineaAqua"></hr>
          </div>
        </div>

        <div className="containerproyect">
          
            <h1 className="titleProyect">Proyectos</h1>
              <h2 className="titleDescription">
                Aqui puedes actualizar tu informacion de contacto
              </h2>
              <hr className="linea"></hr>

            <div className='containerProyect1'>
                <div>
                    <h2>Nombre del Proyecto:</h2>
                    <button>Ver más</button>
                </div>
                <div>
                    <h2>Razon Social: </h2>
                    <button>Seguimiento</button>
                </div>

                <h2>
                    Estado:
                </h2>
                <h2>
                    Descripción:
                </h2>
                
            </div>
            <div className='cajaP'>
            <p className='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam, minima facere sit ex iste voluptates atque dolores aliquam cum hic quo soluta </p>
            </div>

            <div className='containerProyect2'>
                <div>
                    <h2>Nombre del Proyecto:</h2>
                    <button>Ver más</button>
                </div>
                <div>
                    <h2>Razon Social: </h2>
                    <button>Seguimiento</button>
                </div>

                <h2>
                    Estado:
                </h2>
                <h2>
                    Descripción:
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quibusdam, minima facere sit ex iste voluptates atque dolores aliquam cum hic quo soluta quis cupiditate qui corporis? Autem, temporibus commodi?</p>
            </div>


        </div>
      </div>
    
    </>
  )
}

export default Proyecto