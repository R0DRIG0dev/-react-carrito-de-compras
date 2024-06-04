import Reactcodea, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './paginas/Home'
import Inicio from './vistas/Inicio'

import { areas } from './datos'
import { contextoTienda } from './contexto/ContextoTienda'
function ProveedorTienda ({children}){
  const [ listaAreas, setListaCursos ] = useState(areas);
  return (
      <contextoTienda.Provider 
          value={ listaAreas }
      >
          {children}
      </contextoTienda.Provider>
  )
}

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
    <ProveedorTienda>
      <RouterProvider router={enrutador} />
    </ProveedorTienda>
)
