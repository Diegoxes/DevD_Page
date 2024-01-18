
import Metas from "./servicesSection/metas/Metas";
import Optimization from "./servicesSection/optimizationSearch/Optimization";
import SocialMedia from "./servicesSection/socialMedia/SocialMedia";
import Strategies from "./servicesSection/strategies/Strategies";
import SuccessView from "./servicesSection/success/SuccessView";
import Analytics from "./servicesSection/analytics/Analytics";
const Services= () => {
    return ( 
        <>
        <Metas />
        <SuccessView />
        <Strategies />
        <Optimization />
        <SocialMedia />
        <Analytics />
        </>
     );
}
 
export default Services;