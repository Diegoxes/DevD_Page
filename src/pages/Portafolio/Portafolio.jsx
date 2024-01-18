// import NavBar from "@src/components/NavBar";
import NavBar from "../../components/NavBar";
import Slider from "./Slider/Slider";
import Proyectos from "./Proyectos/Proyectos";
import PaginasWeb from "./PaginasWeb/PaginasWeb";
// import Footer from "@src/components/Footer";
import Footer from "../../components/Footer";
function Portafolio() {
  return (
    <>
      <NavBar show={true} />
      <Slider />
      <Proyectos />
      <PaginasWeb />
      <Footer />
    </>
  );
}

export default Portafolio;
