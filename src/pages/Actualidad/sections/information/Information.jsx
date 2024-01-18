// import webinarImg from "@assets/actualidad-img/info-webinar.png";
import webinarImg from '../../../../assets/actualidad-img/info-webinar.png'

const Information = () => {
    return ( 
        <div>
            <img src={webinarImg}/>
            <div className="">
            <h2>Webinar de marketing digital</h2>
            <ul>
                <li>Marketing Offline y su evolución hacia el Marketing Digital</li>
                <li>Tendencias del Marketing Digital</li>
                <li>Smart Citys, Geomarketing, Realidad Aumentada y Big Data</li>
            </ul>
            </div>
            <button>CONOCE MÁS</button>
        </div>
     );
}
 
export default Information;