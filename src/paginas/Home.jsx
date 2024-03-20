import { Outlet } from "react-router-dom";
import './estilos.css'
import BarraLateral from "../componentes/BarraLateral";
import Cabecera from "../componentes/cabecera";

export default function Home (){
    return(
        <div className="flex-general">
            <div className = "contenedoBarraLateral">
                <BarraLateral/>
            </div>
            <main>
                <Cabecera/>
                <Outlet/>
            </main>
        </div>

    );
}