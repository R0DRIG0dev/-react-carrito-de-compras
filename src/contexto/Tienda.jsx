import { createContext, useState } from 'react'
import { areas } from '../datos'

export const ContextoTienda = createContext();

export function ProveedorTienda({children}) {
    const [contenidoCarrito, setContenidoCarrito] = useState([])
    const [seleccion, setSeleccion] = useState(areas[0]);
    const [listaAreas, setListaAreas] = useState(areas);
    const manejadorClickCurso = curso => {
        setContenidoCarrito([curso])
    }
    const manejadorClickArea = id => {
        const areaSeleccionada = areas.filter(area => area.id === id)[0]
        setSeleccion(areaSeleccionada);
    };
    return (
        <ContextoTienda.Provider value=
            {{
                listaAreas,
                manejadorClickArea,
                seleccion,
                contenidoCarrito,
                manejadorClickCurso
            }}
        >
            {children}
        </ContextoTienda.Provider>
    )
}