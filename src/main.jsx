import Reactcodea from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './paginas/Home'
import Inicio from './vistas/Inicio'
// import { ProveedorTienda } from './contexto/ProveedorTienda'
import {contextoTienda} from "./hooks/useTienda";//

const algo = { id:'12', name: "pendejo"}//

const enrutador = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [{
      index: true, element: <Inicio/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Reactcodea.StrictMode>
    {/* <ProveedorTienda> */}
    <contextoTienda.Provider value={ algo }>{/* */}
      <RouterProvider router={enrutador} />
    </contextoTienda.Provider>{/* */}
    {/* </ProveedorTienda> */}
  </Reactcodea.StrictMode>,
)
