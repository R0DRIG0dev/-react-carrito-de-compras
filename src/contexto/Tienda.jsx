import { createContext, useState } from "react";
import { areas } from '../datos'
export const ContextoTienda = createContext();

export function ProveedorTienda({children}) {
    const [listaAreas, setListaAreas] = useState(areas);
    const [seleccion, setSeleccion] = useState(areas[0]);
    const manejadorClickArea = id => {
        const areaSeleccionada = areas.filter( area => area.id === id)[0];
        setSeleccion(areaSeleccionada);
        // console.log(areaSeleccionada);
    }
    return (
        <ContextoTienda.Provider value={{listaAreas,manejadorClickArea,seleccion}}>
            {children}
        </ContextoTienda.Provider>
    )
}