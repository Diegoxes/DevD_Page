// import { teamData, whyData } from "@src/constans/index";
import { teamData } from "../../../../constans";
import { whyData } from "../../../../constans";
// '../../../../constans/index.js'
import { Cardteams, Cardswhy } from "./FunctionTeams";

const Teams = () =>{
    return(
    <>
      <div className="container mx-auto pt-24">
        <h2 className="sm:p-4 text-center times gap-[10px] text-[36px] uppercase bg-gradient-to-r from-aquamarine via-blue-dark to-blue-light text-transparent bg-clip-text font-semibold">Conoce al equipo devdatep</h2>
            <div className=" grid md:grid-cols-3 lg:gap-10 sm:p-6 grid-cols-2 gap-3 ">                       
                {teamData.map((cards, index) => (
                    <Cardteams  key={index} {...cards} />
                    )
                )}
            </div>
     </div>
    <div className="container mx-auto pt-24">
        <h2 className="text-center times gap-[10px] text-[36px] uppercase bg-gradient-to-r from-aquamarine via-blue-dark to-blue-light text-transparent bg-clip-text font-semibold">¿por qué elegirnos?</h2>
        <div className=" md:p-8 grid lg:grid-cols-2 lg:gap-10 gap-8">
            {whyData.map((cards, index) => (
                <Cardswhy  key={index} {...cards} />
                )
            )}
        </div>                    
    </div>   
     </>   
    );

}

export default Teams;