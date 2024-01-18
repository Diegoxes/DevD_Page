// import imgMedida from "@assets/202.png";
import imgMedida from '../../../../../assets/202.png'
import style from '../SystemMedida/systemMedida.module.css';

const SystemMedida = () => {
    return(
        <section className={style.section_4}>
            <div className={style.container_4}>
                <h2 className={`${style.title_4_sect} font-primary`}>CONSTRUIMOS A LA MEDIDA DE TUS NECESIDADES</h2>
                <div className={style.container_sect4}>
                    <img src={imgMedida} alt="" className={style.img_nec_sect4}/>
                    <p className={`${style.par_sect_4} font-primary`}>
                        Creamos páginas web personalizadas, implementamos estrategias de SEO adaptadas a
                        tu audencia, y desarrollamos plataformas de comercio y educación. No importa el tamaño de tu
                        proyecto, nuestro equipo está preparado para hacerlo realidad de acuerdo a tus requerimientos,
                        condiciones y plazos.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SystemMedida
