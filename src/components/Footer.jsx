import { socialMedia } from '../constans/index'
import LogoDev from '../assets/LogoDev.svg'

const Footer = () => {
  return (
    <section className='bg-primary padding-x padding-t pb-14'>
      <footer className='max-container'>
        <div className='flex justify-between lg:items-start items-center gap-32 flex-wrap max-lg:flex-col'>
          <div className='flex flex-1 lg:justify-between justify-center gap-20 flex-wrap lg:border-r-4 lg:pr-36'>
            <div>
              <h3 className='text-white text-xl leading-normal font-bold mb-6 text-center font-primary'>
                DEVDATEP
              </h3>
              <ul className='flex flex-col justify-center items-center'>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer'>
                  Servicios
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer'>
                  Nosotros
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer'>
                  Portafolio
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer'>
                  Actualidad
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer'>
                  Zona del Cliente
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-white text-xl leading-normal font-bold mb-6 text-center font-primary uppercase'>
                Servicios
              </h3>
              <ul className='flex flex-col justify-center items-center'>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer capitalize'>
                  Desarrollo web
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer capitalize'>
                  Ecommerce
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer capitalize'>
                  marketing
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer capitalize'>
                  Desarrollo móvil
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer capitalize'>
                  programacion
                </li>
                <li className='mt-3 text-white text-md leading-normal font-primary hover:text-slate-400 cursor-pointer capitalize'>
                  diseño grafico
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-white text-xl leading-normal font-bold font-t font-primary mb-6 text-center uppercase'>
                Contactanos
              </h3>
              <div className='flex flex-col justify-center items-center'>
                <p className='mt-3 text-white text-md font-primary leading-normal'>
                  +51 917 061 014
                </p>
                <p className='mt-3 text-white text-md font-primary leading-normal'>
                  devdatep@gmail.com
                </p>
                <p className='mt-3 text-white text-md font-primary leading-normal'>
                  20609480905
                </p>
                <p className='mt-3 text-white text-md font-primary leading-normal'>
                  Lima, Perú
                </p>
              </div>
            </div>
            <div>
              <h3 className='text-white text-xl leading-normal font-bold font-primary mb-6 text-center uppercase'>
                Adicional
              </h3>
              <ul className='flex flex-col justify-center items-center'>
                <li className='mt-3 text-white font-primary text-md leading-normal hover:text-slate-400 cursor-pointer'>
                  Terminos de Servicio
                </li>
                <li className='mt-3 text-white font-primary text-md leading-normal hover:text-slate-400 cursor-pointer'>
                  Politica de Privacidad
                </li>
                <li className='mt-3 text-white font-primary text-md leading-normal hover:text-slate-400 cursor-pointer'>
                  Testimonios de Clientes
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col items-center  justify-center'>
            <a href='/'>
              <img
                src={LogoDev}
                alt='logo'
                className='flex justify-center items-center'
              />
            </a>
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map(icon => (
                <div
                  key={icon.alt}
                  className='flex justify-center items-center w-12 h-12 cursor-pointer'
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    className='hover:opacity-75'
                  />
                </div>
              ))}
            </div>
            <p className='mt-6 text-md leading-7 font-montserrat text-white font-primary sm:max-w-sm'>
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
