import { useEffect, useState } from 'react';
import style from '../SystemOneCard/systemOndCard.module.css';

const SystemOneCard = () => {
    const [isVisibleCard, setIsVisibleCard] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 3895) {
            setIsVisibleCard(true);
        }
    }

    return(
        <section className={style.section_5}>
            <div className={style.container_5}>
                <h2 className={`${style.title_5_sect} font-primary`}>Creación de Sitios Web</h2>
                <div className={style.card_sect_5}>
                    <h2 className={`${style.card_title} font-primary`}>Páginas web optimizadas para SEO</h2>
                    <p className={`${style.parr_card_sect5} font-primary`}>
                        Nosotros trabajamos brindando sitios web responsivos, que se adaptan a diferentes dispositivos, ya
                        sean móviles o de escritorio. Por otro lado no se preocupe, por la optimización de su sitio web en
                        motores de búsqueda (SEO), trabajamos con optimización Onsite, Marketing de contenidos y
                        optimización off-site
                    </p>
                </div>
                
                <div className={`transition-opacity duration-[3000ms] sm:duration-[3000ms] ${isVisibleCard ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={style.card_sect_5_2}>
                        <h2 className={`${style.card_title_2} font-primary`}>Instrucción y Apoyo</h2>
                        <p className={`${style.parr_card_sect5_2} font-primary`}>
                            Nuestra prestación incluye acompañamiento profesional para asegurar la resolucion de cualquier consulta la gestión de la plataforma.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SystemOneCard