import Aboutus_start from '../../../assets/About-us-start.png'
// import styles from './info.module.css'

const Information = () => {
  return (
    <section className='bg-aquamarine px-8 padding-t py-32'>
      <div className='h-max max-container'>
        <div className='flex lg:flex-row justify-center items-center gap-14 flex-col mt-24 lg:mt-2'>
          <div className='flex flex-col gap-8 justify-center lg:items-start items-center font-primary lg:w-2/4'>
            <h2 className='text-3xl font-bold lg:mb-8'>¿QUIÉNES SOMOS?</h2>
            <p className='text-base/7 lg:text-xl text-justify'>
              Nuestra familia esta formada por apasionados expertos en
              tecnología, completamente dedicados a ayudarte a alcanzar y
              superar tus metas digitales.
            </p>
            <p className='text-base/7 lg:text-xl text-justify'>
              Nos enorgullecemos de nuestro{' '}
              <span className='font-bold'>compromiso y entusiasmo</span> para
              brindarte la mejor experiencia posible en este mundo tecnológico
              en constante evolución.
            </p>
            <p className='text-base/7 lg:text-xl text-justify'>
              Estamos aquí para colaborar contigo en cada paso del camino y
              asegurarnos de que logres tus objetivos de manera exitosa y
              satisfactoria.{' '}
              <span className='font-bold'>¡Tu exito es nuestra prioridad!</span>
            </p>
          </div>
          <div className='flex items-center justify-center p-2'>
            <img
              src={Aboutus_start}
              alt=''
              className='mx-auto object-contain rounded-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
