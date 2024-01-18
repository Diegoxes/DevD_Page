import style from '../SystemIntro/systemIntro.module.css'

const SystemIntro = () => {
    return(
        <section className={style.section_1}>
            <div className={style.container_1}>
                <h2 className={`${style.title_1_sect} font-primary`}>Desarrollo Web</h2>
                <h2 className={`${style.title_1_1_sect} font-primary`}>Especializado en</h2>
                <h3 className={`${style.title_1_2_sect} font-primary`}>
                    Creación de Sitios web, Desarrollo de Sistema Web, Software a Medida y
                    Responsive Design
                </h3>
                <a href='#' target='_blank' className={`${style.button_sect1} font-primary`}>Seguir más</a>
            </div>
        </section>
    )

}

export default SystemIntro