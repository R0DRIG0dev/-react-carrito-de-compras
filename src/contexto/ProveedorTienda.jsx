import { createContext, useState } from "react";
import { areas } from "../datos";

const ContextoTienda = createContext();

function ProveedorTienda ({children}){
    const [ listaAreas, setListaCursos ] = useState(areas);
    const [ areaSeleccionada, setAreaseleccionada ] = useState(areas[0]);
    const manejadorClickArea = () => { console.log('hola') }
    return (
        <ContextoTienda.Provider 
            value={{ listaAreas,areaSeleccionada,manejadorClickArea }}
        >
            {children}
        </ContextoTienda.Provider>
    )
}

export {ProveedorTienda}
export default ContextoTienda;
