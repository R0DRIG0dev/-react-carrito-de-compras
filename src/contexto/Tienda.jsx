import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const ContextoTienda = createContext();

export function ProveedorTienda({children}) {
    const [contenidoCarrito, setContenidoCarrito] = useState([])
    const [seleccion, setSeleccion] = useState({});
    const [listaAreas, setListaAreas] = useState([]);
    const manejadorClickCurso = curso => {
        if ( !contenidoCarrito.some(unCurso => unCurso.id === curso.id)) {
            setContenidoCarrito([...contenidoCarrito,curso])
        }
    }
    const manejadorClickArea = id => {
        const areaSeleccionada = listaAreas.filter(area => area.id === id)[0]
        setSeleccion(areaSeleccionada);
    };
    const manejadorClickX = id => {
        const nuevoContenido = contenidoCarrito.filter(curso => curso.id !== id)
        setContenidoCarrito(nuevoContenido);
    }
    const manejadorCLickVaciar =()=> { setContenidoCarrito([]) }
    useEffect(()=>{
        async function recuperarAreas(){
            const {data} = await axios('http://127.0.0.1:8000/api/areas');
            setListaAreas(data.data);
            setSeleccion(data.data[0]);
        }
        recuperarAreas()
    },[])
    return (
        <ContextoTienda.Provider value=
            {{
                listaAreas,
                manejadorClickArea,
                seleccion,
                contenidoCarrito,
                manejadorClickCurso,
                manejadorClickX,
                manejadorCLickVaciar
            }}
        >
            {children}
        </ContextoTienda.Provider>
    )
}