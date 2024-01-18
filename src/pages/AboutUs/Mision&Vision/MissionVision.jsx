// import imgm from '../../assets/img-mision.png'
// import imgv from '../../assets/img-vision.png'
// import style from './mission_vision.module.css'
import img_sec_1 from '../../../assets/img_sec_1.jpg'
import img_sec_2 from '../../../assets/img_sec_2.jpg'

const MissionVision = () => {
  return (
    <section className='bg-white padding-x padding-t pb-14'>
      <div className='h-max max-container'>
        <div className='flex flex-col gap-12 lg:gap-9 justify-center items-center'>
          <div className='flex flex-col lg:flex-row p-9  justify-center items-center bg-gradient-to-r from-blue-dark to-blue-light gap-4 rounded-3xl shadow-xl'>
            <img
              src={img_sec_2}
              alt=''
              className='object-contain rounded-full'
            />
            <div className='flex flex-col gap-5 lg:gap-10 justify-center items-center lg:w-[930px] '>
              <h2 className='text-white text-center uppercase font-bold text-xl lg:text-[32px] font-times'>
                MISIÓN, NUESTRA META
              </h2>
              <p className='text-white font-times text-center text-md lg:text-lg'>
                En Devdatep, tenemos como misión proporcionar soluciones
                tecnológicas y eficaces para nuestros clientes a través del
                desarrollo de software a medida.
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row p-9  justify-center items-center bg-gradient-to-r from-blue-dark to-blue-light gap-4 rounded-3xl shadow-xl'>
            <img
              src={img_sec_1}
              alt=''
              className='object-contain rounded-full'
            />
            <div className='flex flex-col gap-5 lg:gap-10 justify-center items-center lg:w-[930px] '>
              <h2 className='text-white text-center uppercase font-bold text-xl lg:text-[32px] font-times'>
                NUESTRA VISIÓN, QUEREMOS
              </h2>
              <p className='text-white font-times text-center text-md lg:text-lg'>
                Nuestra visión es hacer crecer a la empresa y ser líderes en el
                sector de la tecnología, brindando las soluciones adecuadas en
                relación con las necesidades de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
