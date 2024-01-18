import { Link } from "react-router-dom";
// import NavBar from "@src/components/NavBar";
import NavBar from "../../../components/NavBar";
import BannerMk from "./sections/banner/BannerMk";
import Services from "./sections/services/Services";
import Questions from "./sections/questions/Questions";
// import Footer from "@src/components/Footer";
import Footer from "../../../components/Footer";

// import imgWhatsApp from '@assets/mk-img/WhatsApp.png'
import imgWhatsApp from '../../../assets/mk-img/WhatsApp.png'



const Marketing = () => {
    return ( 
        <>
        <NavBar show={true} />
        <BannerMk />
            <div className="fixed-icon fixed bottom-7 right-7 z-50 ">
                <Link to="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                    <img src={imgWhatsApp} alt="Icono" width="60" height="60" /></Link>
            </div>
        <Services />
        <Questions />
        <Footer />
        </>
     );
}
 
export default Marketing;