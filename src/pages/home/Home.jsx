// import logoDevdatep from '@assets/DEVDATEP CONSULTING.png'
import logoDevdatep from '../../assets/DEVDATEP CONSULTING.png'
// import img_desarrolloApp from '@assets/slide3/slide_desarrollomovil.png'
import img_desarrolloApp from '../../assets/slide3/slide_desarrollomovil.png'
// import img_desarrolloWeb from '@assets/slide3/slide_desarrolloweb.png'
import img_desarrolloWeb from '../../assets/slide3/slide_desarrolloweb.png'
// import img_diseñografico from '@assets/slide3/slide_diseñografico.png'
import img_diseñografico from '../../assets/slide3/slide_diseñografico.png'
// import img_ecommerce from '@assets/slide3/slide_ecommerce.png'
import img_ecommerce from '../../assets/slide3/slide_ecommerce.png'
// import img_marketing from '@assets/slide3/slide_marketing.png'
import img_marketing from '../../assets/slide3/slide_marketing.png'
// import img_programacion from '@assets/slide3/slide_programacion.png'
import img_programacion from '../../assets/slide3/slide_programacion.png'
// import slider2 from '@assets/img-slider2.png'
import slider2 from '../../assets/img-slider2.png'
// import logo_slide1 from '@assets/slide1/Logo.svg'
import logo_slide1 from '../../assets/slide1/Logo.svg'
import { PiNumberCircleOneLight,PiNumberCircleTwoLight,PiNumberCircleThreeLight,PiNumberCircleFourLight,PiNumberCircleFiveLight } from "react-icons/pi";
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import NavBar from '../../components/NavBar'
// import NavBar from '@src/components/NavBar'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Home = () => {
  const dataPerform = [
    { title: 'Desarrollo web', img: img_desarrolloWeb },
    { title: 'E-Commerce', img: img_ecommerce},
    { title: 'Marketing', img: img_marketing },
    { title: 'Desarrollo Móvil', img: img_desarrolloApp },
    { title: 'Programación', img: img_programacion },
    {title:'Diseño Gráfico', img: img_diseñografico}
  ]

  const sombraColor = ' rgba(0, 0, 0, 1)';

  return (
    <>
      <NavBar show={false} />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 100000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-screen h-screen "
        style={{
          background:
            "linear-gradient(90deg, #026A7B 6.76%, #394994 48.78%, #1BB0EC 89.09%)",
        }}

      >
        <SwiperSlide>
          {/* <NavBar show={false} /> */}
          <div className='h-full w-full bg-rotation-animation'>
            <div className='container  h-full flex items-center justify-center mx-auto'>
              <img
                src={logo_slide1}
                alt="logo_Devdatep"
                className="w-52 lg:w-96"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <NavBar show={true} /> */}
          <div className='bg-bottom-animation'>
           <div className='h-screen grid md:grid-cols-2 items-center justify-center px-3 font-times gap-6'>
            <div className='xl:ml-40 md:ml-24 md:p-0 p-8 justify-center items-center flex flex-col lg:text-start gap-y-5'>
              <p className='font-primary text-2xl xl:text-4xl mx-auto leading-10 text-[#02353C]'>
                REVOLUCIONANDO EL <span className='text-primary'>ÉXITO</span> EMPRESARIAL A TRAVÉS DE 
                <span className='bg-gradient-to-r from-blue-dark to-blue-light text-transparent bg-clip-text '> SOLUCIONES
                DIGITALES</span>
              </p>
              <p className='font-normal text-base text-[#02353C]'>
                DESDE EMPRENDEDORES HASTA GRANDES CORPORACIONES
              </p>
            </div>
            <div className='flex justify-center'>
              <img
                src={slider2}
                alt='slider_group'
                className='flex xl:w-[356px] xl:h-[400px] lg:w-[256px] lg:h-[300px]'
              />
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* <NavBar show={true} /> */}
          <div className='bg-cyan-200 h-screen bg-gradient'>

          <div className=' h-full w-full flex items-center flex-col justify-center mx-auto max-w-7xl text-black font-times'>
            <div className='mb-10'>
              <p className='font-primary text-2xl lg:text-4xl leading-10'>
                QUÉ REALIZAMOS
              </p>
            </div>
            <div className='grid grid-cols-2 gap-x-0 gap-y-12 lg:grid-cols-3'>
              {dataPerform.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center mx-auto lg:w-72"
                >
                  <div className="w-[150px] h-[150px] rounded-full bg-white opacity-10"></div>
                  <img
                    src={item.img}
                    alt='outline'
                    className='absolute w-32 top-[10%]'
                  />
                  <p className='font-primary text-xl filter drop-shadow-4xl absolute text-center  lg:text-2xl top-[140px]'style={{filter: `drop-shadow(0 4px 6px ${sombraColor})`}}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "linear-gradient(90deg, #EEFFF8,#88DEFF)"
          }}
        >
          <div className='h-full w-full flex gap-20 items-center py-auto lg:md:mx-auto  lg:flex-col lg:justify-center  md:flex-col md:justify-center md:md:mx-auto max-w-8xl'>
           <div className='flex flex-col gap-6'>
            <div className=''>
              <h1 className='font-primary text-black lg:text-5xl leading-12 py-4 uppercase'>
                ¿Tú empresa está siendo parte de la digitalización?
              </h1>
            </div>
            <div className='container mx-auto max-w-2xl md:max-w-5xl lg:mx-w-4xl text-center'>
              <p className='font-primary text-black text-center text-2xl leading-tight '>
                Te ayudamos a conocer el grado de digitalización de tu empresa, contamos con especialistas altamente capacitados
              </p>
            </div>
           </div>
           <div className='rounded-md shadow-[0px_0px_20px_4px_rgba(0,0,0,0.3)] bg-white flex flex-col h-[300px] gap-8 items-center justify-center w-[850px]  md:w-[980px] md:h-[440px]'>
            <div className='flex items-center flex-row gap-4'>
              <PiNumberCircleOneLight size={40} className='cursor-pointer hover:bg-slate-700'/>  
              <PiNumberCircleTwoLight size={40} className='cursor-pointer hover:bg-slate-700'/> 
              <PiNumberCircleThreeLight size={40} className='cursor-pointer hover:bg-slate-700'/> 
              <PiNumberCircleFourLight size={40} className='cursor-pointer hover:bg-slate-700'/> 
              <PiNumberCircleFiveLight size={40} className='cursor-pointer hover:bg-slate-700'/>            
            </div>
            <div className='flex flex-col gap-8 mx-[120px] my-3  items-center justify-center'>
              <strong className='text-xl '>¿Qué tan importante son las herramientas tecnológicas en tu empresa?</strong>
              <div className='flex flex-col mx-4'>
                <ul className='flex flex-col gap-5 font-primary'>
                  <li className='mx-3 flex items-center gap-3'>
                    <input type="checkbox" className='w-7 h-7 rounded-full'/> 
                    <span>Poco importante. Hacemos uso de herramientas muy básicas</span>
                  </li>     
                  <li className='mx-3 flex items-center gap-3'> 
                    <input type="checkbox" className='w-7 h-7 rounded-full'/> 
                    <span>Medianamente importante. Uso las que son necesarias, pero fáciles de usar.</span>
                  </li>
                  <li className='mx-3 flex items-center gap-3 '>
                    <input type="checkbox" className='w-10 h-10'/>
                    <span>Muy importante: Son indispensables, cuento con herramientas tecnológicas avanzadas que facilitan mucho mi trabajo</span>
                  </li>                
                </ul>    
                         
              </div>
              <div className='flex flex-row ml-[350px]'>
                <button className='bg-[#2EAF7D]  text-white px-10  py-2 rounded-lg'>Siguiente</button>
              </div>
            </div>
                  
           </div>
          </div>
           
          
        </SwiperSlide>
        <SwiperSlide
          style={{
            background: "linear-gradient(180deg, #EEFFF8 0%, #C1EEFF 100%)",
          }}
        >
          {/*  <NavBar show={true} /> */}
          <div className="h-full w-full flex items-center flex-col justify-center mx-auto max-w-7xl">
            <div className="container mx-auto max-w-2xl md:max-w-4xl lg:mx-w-4xl text-center">
              <p className="font-primary text-black text-2xl lg:text-4xl leading-12 py-4">
                DESTACAMOS POR BRINDAR SOLUCIONES DIGITALES INTEGRALES
              </p>
              <p className="font-primary text-black py-8 px-14 mx-auto lg:max-w-full leading-5">
                QUE PERMITAN A LAS EMPRESAS APROVECHAR AL MÁXIMO EL POTENCIAL
                DEL ENTORNO DIGITAL, PARA ALCANZAR EL ÉXITO Y CRECIMIENTO
                SOSTENIBLE.
              </p>
              <button
                style={{
                  borderRadius: "10px",
                  background:
                    "var(--Variacin-verde, linear-gradient(90deg, #2EAF7D 0%, rgba(68, 147, 66, 0.60) 100%))",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
                className="text-white font-primary sm:text-base md:text-xl lg:text-2xl xl:text-xl rounded-3xl py-3 px-14 mt-8"
              >
                Solicitar información
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
