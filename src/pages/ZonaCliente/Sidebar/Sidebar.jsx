import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
         <div className="padresidebar">
        <div className="sidebar">
          <ul className="list">
            <li>
              <Link to="">Proyecto</Link>
            </li>
            <li>
              <Link to="">Dudas Frecuentes</Link>
            </li>
            <li>
              <Link to="">Opinión</Link>
            </li>
            <li>
              <Link to="">Mi Perfil</Link>
            </li>
          </ul>
          <hr className="linea1"></hr>
        </div>
      </div>
    </div>
  )
}

export default Sidebar