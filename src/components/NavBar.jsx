import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsTextLeft } from 'react-icons/bs'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import devdatep_logo from '../assets/devdatep_logo.png'
import '../stylesheets/Navbar.css'

const NavBar = ({ show }) => {
  const [click_b, setClick_b] = useState(false)
  const [click_a, setClick_a] = useState(false)

  const change_i = () => {
    setClick_b(!click_b)
  }
  const change_x = () => {
    setClick_a(!click_a)
  }
  /* ----------------------------- */
  const [NavBarBackground, setNavBarBackground] = useState('transparent')

  useEffect(() => {
    // Agregar un evento de escucha al desplazamiento (scroll)
    window.addEventListener('scroll', handleScroll)

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    // Obtener la posición actual del desplazamiento
    const scrollPosition = window.scrollY

    // Definir la altura en la que deseas que cambie el color del NavBar
    const scrollThreshold = 150

    if (scrollPosition > scrollThreshold) {
      // Cuando el usuario hace scroll más allá de la altura umbral
      setNavBarBackground('rgb(27, 176, 236, 0.5)') // Cambia 'color-deseado' al color deseado
    } else {
      // Cuando el usuario está por debajo de la altura umbral
      setNavBarBackground('transparent') // Cambia a 'transparent' o el color original del NavBar
    }
  }

  ;<style>
    .center_list
    {{
      display: 'none'
    }}
  </style>

  return (
    <header
      id='header'
      className={click_b ? 'c_change on' : 'c_change'}
      style={{ backgroundColor: NavBarBackground }}
    >
      {show && (
        <div className='m-4'>
          <img className='logo' src={devdatep_logo} alt='devdatep_logo' />
        </div>
      )}

      <div className='btn_menu'>
        <div className='circle ' onClick={change_i}>
          {click_b ? (
            <AiOutlineClose size={25.4} className='iconx '  />
          ) : (
            <BsTextLeft size={26} className='icon' />
          )}
        </div>
        <div id='block_menu'>
          <div className='center'>
            {/*  Lista principal */}
            <div className={click_a ? 'center_servicios' : 'center_list'}>
              {click_a ? (
                <ul id='ul'>
                  <li className='servicios_on' onClick={change_x}>
                    Servicios{' '}
                    <TiArrowSortedUp className='icon_arrow_down' size={30} />
                  </li>
                  <li className='li'>
                    <Link className='a'  to='/desarrollo-web' >Desarrollo Web</Link>
                  </li>
                  <li className='li'>
                    <Link className='a' /* to='/sitios' */>Ecommerce</Link>
                  </li>
                  <li className='li'>
                    <Link className='a' to='/Marketing'>
                      Marketing
                    </Link>
                  </li>
                  <li className='li'>
                    <Link className='a' /* to='/sitios' */>Desarrollo Móvil</Link>
                  </li>
                  <li className='li'>
                    <Link className='a' /* to='/sitios' */>Programación</Link>
                  </li>
                  <li className='li'>
                    <Link className='a' /* to='/medida' */>Diseño Gráfico</Link>
                  </li>                 
              </ul>   
              )           
              :
              <ul id='ul'>
                <li className='li'>
                  <Link className='a' to='/inicio'>
                    Inicio
                  </Link>
                </li>
                <li className='servicios' onClick={change_x}>               
                    Servicios <TiArrowSortedDown className='icon_arrow_down' size={30}/>           
                </li>
                <li className='li'>
                  <Link className='a' to='/nosotros'>
                    Nosotros
                  </Link>
                </li>
                <li className='li'>
                  <Link className='a' to='/portafolio'>
                    Portafolio
                  </Link>
                </li>
                <li className='li'>
                  <Link className='a' to='/actualidad'>
                    Actualidad
                  </Link>
                </li>
                <li className='li'>
                  <Link className='a' to='/zona-de-cliente'>
                    Zona del cliente
                  </Link>
                </li>
              </ul>             
            }
            </div>           

          </div>
        </div>
      </div>
    </header>
  )
};


export default NavBar
