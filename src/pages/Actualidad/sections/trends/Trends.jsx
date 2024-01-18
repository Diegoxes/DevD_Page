// import trendsImg from '@assets/actualidad-img/tendencia-card.png'
import trendsImg from '../../../../assets/actualidad-img/tendencia-card.png'

const Trends = () => {
    return ( 
        <section>
            <div className="grid grid-cols-2">
                <div>
                   <h2>Uso de la inteligencias artificial en marketing digital</h2>
                   <p>Generar contenido creativo<br/>
                      Generar contenido creativo<br/>
                      Crear anuncios publicitarios llamativos<br/>
                      Diseño de logotipos<br/>
                      Generar contenido de blog de forma personalizada</p>
                    <img src={trendsImg}/>
                    <button>CONOCE MÁS</button>
                </div>
                <div>
                    <h2>Ventajas de desarrollar una base de datos en tu negocio</h2>
                    <ul>
                        <li>Definición de big data marketing</li>
                        <li>Cómo se aplica en marketing digital</li>
                        <li>Marketing personalizado</li>
                        <li>Caso de éxito: Netflix</li>
                    </ul>
                    <img src={trendsImg}/>
                    <button>CONOCE MÁS</button>
                </div>
                <div> 
                    <h2>Realidad virtual en Pymes: ¿Es una inversión rentable?</h2>
                    <ul>
                        <li>Mayor visibilidad a sus productos</li>
                        <li>Contenido realista e impactante</li>
                        <li>Crea experiencias</li>
                        <li>Estrategias de mercadeo</li>
                    </ul>
                    <img src={trendsImg}/>
                    <button>CONOCE MÁS</button>
                </div>
                <div>
                    <h2>Realidad virtual en Pymes: ¿Es una inversión rentable?</h2>
                    <ul>
                        <li>Mayor visibilidad a sus productos</li>
                        <li>Contenido realista e impactante</li>
                        <li>Crea experiencias</li>
                        <li>Estrategias de mercadeo</li>
                    </ul>
                    <img src={trendsImg}/>
                    <button>CONOCE MÁS</button>
                </div>
            </div>
        </section>
     );
}
 
export default Trends;