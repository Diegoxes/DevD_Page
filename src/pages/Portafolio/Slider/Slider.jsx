// import backgroundImage from '@assets/BackgroundSlider_Portafolio.png';
import backgroundImage from '../../../assets/BackgroundSlider_Portafolio.png'
import './Slider.css'

function Slider() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-cover bg-center text-white background-filter" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center mx-auto">
        <h1 className="slider-title font-primary text-6xl font-normal leading-normal mb-4">Devdatep Consulting</h1>
        <p className="slider-p font-primary text-lg lg:text-xl w-2/5 mx-auto">
          Explora nuestro portafolio: un escaparate de proyectos que reflejan nuestra pasión por la innovación.
        </p>
      </div>
    </div>
  );
}

export default Slider;
