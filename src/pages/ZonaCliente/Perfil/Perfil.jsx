import React from "react";
/*import NavBar from "../../../components/NavBar";*/
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Perfil.css";

function Perfil() {
  return (
    <div className="padrePerfil">
      {/*<NavBar />*/}

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
              
              <Link to={"/proyecto"}>
              <h2>PROYECTOS</h2>
              <img
                className="btnflecha"
                src="src\assets\zona-cliente-perfil-img\Vector.png"
              />
              </Link> 
            </div>
            <hr className="lineaAqua"></hr>
          </div>
        </div>

        <div className="containerform">
          <form>
            <h1 className="title">Perfil</h1>

            <div className="form1">
              <h2 className="titleDescription">
                Aqui puedes actualizar tu informacion de contacto
              </h2>
              <hr className="linea"></hr>

              <div className="firstContent">
                <div className="caja">
                  <label className="formlabel"htmlFor="nombrecomercial">Nombre Comercial:</label>
                  <input className="input1" type="text" id="nombrecomercial" />
                </div>
                <div className="caja">
                  <label  className="formlabel"htmlFor="">RUC:</label>
                  <input className="input2" type="text" id="" />
                </div>
                <div className="caja">
                  <label className="formlabel"htmlFor="">Razon Social:</label>
                  <input className="input1" type="text" id="" />
                </div>
                <div className="caja">
                  <label className="formlabel"htmlFor="">Dirección Legal:</label>
                  <input className="input2" type="text" id="" />
                </div>
              </div>
            </div>

            <div className="form2">
              <h2 className="titleDescription">Datos del contacto</h2>
              <hr className="linea"></hr>
              <div className="secondContent">
                <div className="caja">
                  <label className="formlabel">Nombre y Apellidos del contacto:</label>
                  <input className="input1" type="text" />
                </div>
                <div className="caja">
                  <label className="formlabel">DNI:</label>
                  <input className="input2" type="text" />
                </div>
                <div className="caja">
                  <label className="formlabel">Puesto:</label>
                  <input className="input1" type="text" />
                </div>
                <div className="caja">
                  <label className="formlabel">Teléfono:</label>
                  <input className="input2" type="text" />
                </div>
                <div className="caja">
                  <label className="formlabel">Correo electrónico</label>
                  <input className="input1" type="text" />
                </div>
              </div>

              <button className="btn-edit">Editar</button>
            </div>

            <h2 className="titleDescription">Seguridad y Contraseña</h2>
            <hr className="linea"></hr>

            <div className="thirdContent">
              <div className="caja">
                <label className="formlabel">Contraseña Actual</label>
                <input className="input1" type="text" />
              </div>
              <div className="caja">
                <label className="formlabel">Nueva contraseña</label>
                <input className="input1" />
              </div>
              <div className="caja">
                <label className="formlabel">Confirmar nueva contraseña</label>
                <input className="input1" />
              </div>
            </div>
            <button className="btn-changeP">Cambiar Contraseña</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
