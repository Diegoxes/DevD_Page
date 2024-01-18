import { FiArrowRight } from 'react-icons/fi'

const SectionProject = () => {
  return (
    <section className='padding-x padding-t py-28'>
      <div className='max-container'>
        <div className='flex flex-col lg:flex-row lg:justify-around justify-center items-center gap-9'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className='text-xl lg:text-3xl font-times'>
              ¿Tienes algún proyecto en mente?
            </h3>
            <p className='text-lg lg:text-2xl font-times text-center'>
              Agéndanos una cita para revisar tu proyecto
            </p>
          </div>
          <div>
            <button className='bg-blue-light text-white text-xl lg:text-2xl font-times px-4 lg:px-7 py-2 flex gap-4 rounded-2xl cursor-pointer'>
              Inicia tu proyecto{' '}
              <i className='bg-white rounded-full text-blue-light p-1'>
                <FiArrowRight />
              </i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionProject
