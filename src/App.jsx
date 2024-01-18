import { Navigate, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs/AboutUs'
import Home from './pages/home/Home'
import Marketing from './pages/Servicios/marketing/Marketing'
import System from './pages/Servicios/Sistemas/System'
import ZonaCliente from './pages/ZonaCliente/ZonaCliente'
import Portafolio from './pages/Portafolio/Portafolio'
import Actualidad from './pages/Actualidad/Actualidad'
import Perfil from './pages/ZonaCliente/Perfil/Perfil'  
import Proyecto from './pages/ZonaCliente/Proyecto/Proyecto'


function App () {
  return (
    <Routes>
      <Route>
        <Route index element={<Home/>} />
        <Route path='/nosotros' element={<AboutUs/>} />
        <Route path='/desarrollo-web' element={<System/>} />
        <Route path='/marketing' element={<Marketing/>} />
        <Route path='/actualidad' element={<Actualidad/>} />
        <Route path='/zona-de-cliente' element={<ZonaCliente/>}/>
        <Route path="/proyecto" element={<Proyecto/>} />
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/portafolio' element={<Portafolio/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}
export default App
