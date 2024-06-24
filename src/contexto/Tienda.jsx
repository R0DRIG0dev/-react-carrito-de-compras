import { createContext, useState } from "react";
import { areas } from '../datos'
export const ContextoTienda = createContext();

export function ProveedorTienda({children}) {
    const [listaAreas, setListaAreas] = useState(areas);
    const [seleccion, setSeleccion] = useState(areas[0]);
    const [contenidoCarrito, setContenidoCarrito] = useState([]);
    const manejadorClickArea = id => {
        const areaSeleccionada = areas.filter( area => area.id === id)[0];
        setSeleccion(areaSeleccionada);
    }
    const manejadorClickCurso = curso => {
        const array = [...contenidoCarrito];
        array.push(curso);
        setContenidoCarrito(array)
    }
    return (
        <ContextoTienda.Provider value={{
            listaAreas,
            manejadorClickArea,
            seleccion,
            contenidoCarrito,
            manejadorClickCurso}}
        >
            {children}
        </ContextoTienda.Provider>
    )
}