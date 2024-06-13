import { createContext, useState } from "react";
import { areas } from '../datos'
export const ContextoTienda = createContext();

export function ProveedorTienda({children}) {
    const [listaAreas, setListaAreas] = useState(areas);
    const manejadorClickArea = () => console.log("hola");
    return (
        <ContextoTienda.Provider value={{listaAreas,manejadorClickArea}}>
            {children}
        </ContextoTienda.Provider>
    )
}