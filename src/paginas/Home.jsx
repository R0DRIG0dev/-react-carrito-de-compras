import { Outlet } from "react-router-dom";
import './estilos.css'
import BarraLateral from "../componentes/BarraLateral";
import Cabecera from "../componentes/cabecera";
import { useState } from "react";

export default function Home (){

    const [colapsar, setColapsar] = useState(false);

    const efecto_colapsar = () => {
        document.body.classList.toggle("collapsed")
        setColapsar(!colapsar);
    };

    return(
        <div className="flex-general">
            <div className = {`contenedoBarraLateral ${colapsar ? 'contenedoColapsado' : ''}`}>
                <div className= {`efectoPonerDialog ${colapsar ? 'efectoQuitarDialog' : ''}`}>
                    <BarraLateral efecto_colapsar={efecto_colapsar}/>
                </div>
            </div>
            <main>
                <Cabecera/>
                <Outlet/>
            </main>
        </div>
    );
}