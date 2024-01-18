// import Aboutus_start from '@assets/About-us-start.png'
import Aboutus_start from '../../../assets/About-us-start.png'
import { BsCheck2 } from 'react-icons/bs'

const ChoosenSection = () => {
  return (
    <section className='bg-white padding-x padding-t pb-24'>
      <div className='h-max max-container'>
        <div className='flex flex-col justify-center items-center gap-12 font-primary'>
          <h2 className='text-2xl lg:text-4xl lg:font-bold tracking-wide'>
            ¿Por qué elegirnos?
          </h2>
          <div className='flex flex-col p-9  justify-center items-center bg-aquamarine gap-4 lg:gap-10 rounded-3xl shadow-xl'>
            <img src={Aboutus_start} alt='' className='object-contain' />
            <div className='flex flex-col gap-5 lg:gap-10 justify-center items-center lg:w-[630px] '>
              <p className='w-2/3 text-center py-4 text-sm md:text-lg lg:text-xl'>
                En Devdatep Consulting, nuestra experiencia y pasión por la
                tecnología se traducen en soluciones digitales de calidad que
                impulsarán tu negocio. Nos comprometemos a comprender tus
                necesidades y a personalizar nuestras soluciones para lograr tus
                objetivos. Tu éxito tecnológico es nuestra prioridad.
              </p>
            </div>
          </div>
          <div className='flex justify-start items-center gap-2 lg:gap-10 py-10'>
            <div className='flex flex-col gap-2 md:gap-6 justify-around'>
              <div className='flex gap-3 items-center'>
                <BsCheck2 className='text-xl font-bold' />
                <p className='text-md md:text-xl'>Propuestas inoovadoras</p>
              </div>
              <div className='flex gap-3 items-center'>
                <BsCheck2 className='text-xl font-bold' />
                <p className='text-md md:text-xl'>Servicios de calidad</p>
              </div>
              <div className='flex gap-3 items-center'>
                <BsCheck2 className='text-xl font-bold' />
                <p className='text-md md:text-xl'>Atención personalizada</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 md:gap-6 justify-around'>
              <div className='flex gap-3 items-center'>
                <BsCheck2 className='text-xl font-bold' />
                <p className='text-md md:text-xl'>Acompañamineto continuo</p>
              </div>
              <div className='flex gap-3 items-center'>
                <BsCheck2 className='text-xl font-bold' />
                <p className='text-md md:text-xl'>
                  Equipo altamente capacitado
                </p>
              </div>
              <div className='flex gap-3 items-center'>
                <BsCheck2 className='text-xl font-bold' />
                <p className='text-md md:text-xl'>Transparencia y confianza</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChoosenSection
