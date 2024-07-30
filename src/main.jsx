import Reactcodea, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './paginas/Home'
import Inicio from './vistas/Inicio'
import { ProveedorTienda } from './contexto/Tienda'


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
    <ProveedorTienda>
      <RouterProvider router={enrutador} />
    </ProveedorTienda>
  </Reactcodea.StrictMode>,
)
