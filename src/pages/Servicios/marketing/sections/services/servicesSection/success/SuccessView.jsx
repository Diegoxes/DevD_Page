import { successData } from "./Constants";
import CardSuccess from "./Functions";

const Success = () => {
    return ( 
        <section className="bg-gray-200">
       <div className="container mx-auto p-10 pt-32 md:pt-10 ">
        <h1 className="text-center text-3xl text-blue-dark pt-4">CÓMO POTENCIAMOS TU EXITO</h1>
            <div className="py-11">
            <div className=" grid md:grid-cols-2 lg:gap-10 sm:p-6  gap-3 items-center justify-center">                       
                {successData.map((cards, index) => (
                    <CardSuccess key={index} {...cards} />
                    )
                )}
                
            </div>
            </div>
       </div>
       </section>
     );
}
 
export default Success;