// import Footer from '@src/components/Footer';
import Footer from '../../../components/Footer';
// import NavBar from '@src/components/NavBar';
import NavBar from '../../../components/NavBar';
import SystemCards from './components/SystemCards/systemCards';
import SystemClick from './components/SystemClick/systemClick';
import SystemIntro from './components/SystemIntro/systemIntro';
import SystemMedida from './components/SystemMedida/systemMedida';
import SystemOneCard from './components/SystemOneCard/systemoneCard';
import SystemPruebaAccordion from './components/SystemPruebaAccordion/QuestionSystem';
import SystemSolution from './components/SystemSolution/systemSolution';


const System = () => {
  return (
    <>
      <NavBar/>
      <SystemIntro/>
      <SystemSolution/>
      <SystemClick/>
      <SystemCards/>
      <SystemMedida />
      <SystemOneCard />
      <SystemPruebaAccordion/>
      <Footer/>
    </>
  )
}

export default System;
