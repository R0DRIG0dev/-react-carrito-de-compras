import Reactcodea, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './paginas/Home'
import Inicio from './vistas/Inicio'

import { createContext } from "react";
import { areas } from './datos'
export const ContextoTienda = createContext();
// const [listaAreas, setListaAreas] = useState(areas);

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
    <ContextoTienda.Provider value = {"listaAreas"}>
      <RouterProvider router={enrutador} />
    </ContextoTienda.Provider>
)
