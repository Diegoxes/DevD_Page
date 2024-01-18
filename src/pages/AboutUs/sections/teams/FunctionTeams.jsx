import './teams.css'
   const Cardteams = ({nombre, area, descripcion, imgSrc}) =>{
        return ( 
        <div className="py-10 flip-card mx-auto md:w-56 w-44 md:h-80 h-72 relative flex ">
            <div className="card-inner absolute ">
                <div className="front bg-gradient-to-r from-blue-dark to-blue-light rounded-xl absolute">
                    <div className="p-3 md:mt-10 mt-2 flex flex-col justify-center items-center">
                        <div className="md:w-32 w-24 md:h-32 h-24 mt-0 pt-0 border-8 rounded-full">
                            <img className=" mt-0 pt-0 rounded-full" src={imgSrc} alt={nombre}/>
                        </div>
                        <div className="text-center font-montse">
                            <h3 className="text-md/[24px] font-semibold my-2">{nombre}</h3>
                            <p>{area}</p>
                        </div>
                    </div>
                </div>
                <div className="back bg-gradient-to-r from-blue-dark to-blue-light absolute  rounded-xl flex flex-col justify-center items-center">
                    <h2 className="text-xl text-center">{nombre}</h2>
                    <p className="text-center p-3">{descripcion}</p>
                </div>
            </div>
        </div>
        );
    }
    const Cardswhy = ({ imgSrc, descripcion }) =>{
        return(
             <div className="p-[30px] shadow-md bg-blue-light mt-10 gap-8 rounded-xl flex flex-col justify-center items-center w-[360px] md:w-[490px] mx-auto  h-[508px] md:h-[608px]">
                 <img className="md:w-[312px] w-full h-[288px] rounded-xl" src={imgSrc} />
                    <div className="text-center font-montse">
                       <p className="md:text-1xl text-sm font-semibold gap-4">{descripcion}</p>
                    </div>
             </div>
        )
    };

export { Cardteams, Cardswhy};