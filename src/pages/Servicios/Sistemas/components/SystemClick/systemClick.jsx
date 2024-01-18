import style from "../SystemClick/systemClick.module.css";

const SystemClick = () => {
    return (
        <section className={style.section_2}>
            <div className={style.container_2}>

                <div className={style.container_click_img}>
                    <div className={style.info_click}>
                        <h3 className={`${style.title_click} font-primary`}>
                            HAZ CLICK EN EL BOTÓN DE REPRODUCCIÓN DEL VIDEO Y DESCUBRE
                        </h3>
                        <p className={`${style.parrafo_click} font-primary`}>
                            Las 3 razones por la cual necesitas crear tu pagina web. Recuerda que estamos disponibles para comenzar a colaborar contigo.
                        </p>
                    </div>
                    <div className={style.cont_img_click}>

                        <iframe className={style.img_click} src="https://www.youtube.com/embed/8e2yDcfdAxk?si=q11Gagii_DA3ey_g"
                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        {/* <img
                            src="https://www.axiateam.com/wp-content/uploads/2021/01/desarrollando-equipo-programadores-que-leen-codigos-computadora-desarrollo-sitios-web-diseno-tecnologias-codificacion-scaled.jpg"
                            alt=""
                            className={style.img_click}
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemClick;
