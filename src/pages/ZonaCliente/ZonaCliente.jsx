import './ZonaCliente.css'
import { useState } from 'react';
// import LogoDevdatepLogin from '@assets/zona-cliente-img/devdatep_logo_login.png'
import LogoDevdatepLogin from '../../assets/zona-cliente-img/devdatep_logo_login.png'
// import LogoDevdatep2Login from '@assets/zona-cliente-img/devdatep_logo2_login.png'
import LogoDevdatep2Login from '../../assets/zona-cliente-img/devdatep_logo2_login.png'
// import TeamImageLogin from '@assets/zona-cliente-img/Team_img_login.svg'
import TeamImageLogin from '../../assets/zona-cliente-img/Team_img_login.svg'
import { BsEye , BsEyeSlash  } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ZonaCliente= () =>{

    const [viewPassword, setViewPassowrd] = useState(false);
    const [input , setInput] = useState('');

    const change_view = () =>{
        setViewPassowrd(!viewPassword)
    }

    const handleChange = (event) =>{
        setInput(event.target.value)
    }
    

    return(  
        <section className='container mx-auto  flex justify-center md:items-center h-screen  '>
            <div className='grid md:grid-cols-2 md:justify-center lg:w-[1190px] lg:h-[611px] lg:bg-transparent md:w-[800px] md:h-[400px] rounded-xl md:shadow-[0_0_24px_0px_rgba(0,0,0,0.3)] sm:shadow-[0_0_24px_0px_rgba(0,0,0,0.3)]'>
                <div className='flex flex-col  '>
                    <div className='flex justify-center md:items-center lg:mt-24 md:mt-10 mt-28'>
                        <img src={LogoDevdatepLogin} alt="Logo devdatep" className='md:h-[70px] md:w-[220px] lg:h-[100px] lg:w-[339px] lg:block hidden '/>
                        <img src={LogoDevdatep2Login} alt="Logo devdatep" className='block md:hidden' />
                    </div>
                    <div className='mx-auto gap-5 flex flex-col lg:mt-20 md:mt-10 mt-8'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-normal'>Ingrese su correo:</p>
                            <input  type="email" className='border border-[#5B5F6E] lg:w-[452px] lg:h-[34px] md:w-[300px] md:h-[25px] rounded-md px-3' required />
                        </div>
                       <div className='flex flex-col gap-1'>
                            <p className='font-normal'>Ingrese su contraseña:</p>
                            <div className='border border-[#5B5F6E] lg:w-[452px] lg:h-[34px] md:w-[300px] md:h-[25px] rounded-md pl-3 font  flex items-center'>
                                <input type={viewPassword ? "text" : "password"}  className='lg:w-[400px] lg:h-[25px]  md:w-[250px] md:h-[20px] focus:outline-none focus:ring-0'  onChange={handleChange} required />
                                {input && (
                                    <div className='mx-auto' onClick={change_view}>
                                    {viewPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
                                    </div>
                                )}
                            </div>
                       </div>
                       <div className=''>   {/*modifico diego*/}
                        <Link to="/Perfil">
                            <button className='bg-[#3FD0C9] hover:bg-[#34aca6]   lg:w-[452px] lg:h-[43px] md:w-[300px] md:h-[25px] w-[250px] rounded-md text-white lg:text-lg md:text-md'>
                                Inciar sesión
                            </button>
                        </Link>
                        </div>
                        <a className='text-center text-sm text-[#1877f2]  hover:underline underline-offset-1 cursor-pointer' >¿Olvidaste tu contraseña?</a>
                    </div>                    
                </div>  
                <div className='md:bg-[#C1F6ED] md:flex md:h-full md:w-full md:justify-center md:items-center md:rounded-r-xl '>
                    <img src={TeamImageLogin} alt="Imagen del team login" className='md:block hidden  lg:w-[475px] lg:h-[438px] md:w-[275px] md:h-[338px]' />                    
                </div>             
            </div>
        </section>      
       
       
        
    );
};

export default ZonaCliente

