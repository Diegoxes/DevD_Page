// import Footer from '@src/components/Footer'
import Footer from '../../components/Footer'
// import Navbar from '@src/components/NavBar'
// import MissionVision from '../Mision&Vision/MissionVision'
import Information from './information/Information'
import SectionProject from './components/SectionProject'
import ChoosenSection from './components/ChoosenSection'
import Teams from './sections/teams/Teams'
// import NavBar from '@src/components/NavBar'
import NavBar from '../../components/NavBar'

const AboutUs = () => {
  return (
    <>
      <NavBar show={true} />
      <Information />
      <ChoosenSection />
      {/* <MissionVision /> */}
      <Teams />
      <SectionProject />
      <Footer />
    </>
  )
}

export default AboutUs
