// import imgCreateWeb from "@assets/Cloud.png";
import imgCreateWeb from '../../../../../assets/Cloud.png'
// import imgResponsive from "@assets/Laptop_with_chart.png";
import imgResponsive from '../../../../../assets/Laptop_with_chart.png'
// import imgSoftware from "@assets/Rocket.png";
import imgSoftware from '../../../../../assets/Rocket.png'
// import imgWebDeveloper from "@assets/Smartphone.png";
import imgWebDeveloper from '../../../../../assets/Smartphone.png'
import style from "../SystemCards/systemCards.module.css";

const SystemCards = () => {
    return (
        <section className={style.section_3}>
            <div className={style.container_3}>
                <h2 className={`${style.title_3_sect} font-primary`}>LA OPORTUNIDAD ES TUYA</h2>
                <div className={style.container_cards}>
                        <div className={style.card}>
                            <div className={style.card_image}>
                                <img src={imgResponsive} alt="" className={style.imgcard}/>
                            </div>
                            <h2 className="font-primary">Responsive Design</h2>
                            <p className="font-primary">
                                Garantización de que los sitios webs estén optimizados para una
                                correcta visualización en dispositivos móviles, proporcionando
                                una experiencia atractiva para los usuarios en smartphones y
                                tablets
                            </p>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_image}>
                                <img src={imgWebDeveloper} alt="" className={style.imgcard}/>
                            </div>
                            <h2 className="font-primary">Desarrollo de System Web</h2>
                            <p className="font-primary">
                                Desarrollo de herramientas digitales específicas para cada
                                empresa, adaptada a sus necesidades
                            </p>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_image}>
                                <img src={imgSoftware} alt="" className={style.imgcard}/>
                            </div>
                            <h2 className="font-primary">Software a Medida</h2>
                            <p className="font-primary">
                                Creación de soluciones inteligentes que automatizan procesos,
                                mejoran la eficiencia y potencian los negocios en internet y
                                metas
                            </p>
                        </div>
                        <div className={style.card}>
                            <div className={style.card_image}>
                                <img src={imgCreateWeb} alt="" className={style.imgcard}/>
                            </div>
                            <h2 className="font-primary">Creación de Sitios Web</h2>
                            <p className="font-primary">
                                Diseño y construcción de páginas web desde cero, teniendo en
                                cuenta las metas y objetivos que el cliente busca lograr en
                                linea.
                            </p>
                        </div>
                    
                </div>
            </div>
        </section>
    );
};

export default SystemCards;
