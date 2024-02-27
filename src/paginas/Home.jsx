import { Outlet } from "react-router-dom";
import './estilos.css'
import BarraLateral from "../componentes/BarraLateral";

export default function Home (){
    return(
        <div className="flex-general">
            <BarraLateral/>
            <main className="flex-1">
                <Outlet/>
            </main>
        </div>
    );
}