import { useContext } from "react";
import "./estilos/Cabecera.css";
import { ContextoTienda } from "../contexto/Tienda";
import Carrito from "./carrito";

export default function Cabecera (){
  const {seleccion} = useContext(ContextoTienda);
  return (
    <header className="cabecera">
      <div className="four columnas">
        <h1>{seleccion.nombre}</h1>
        <p> Elige un curso para llevarlo al carrito </p>
      </div>
      <div className="two columnas pegar-ala-derecha">
        <Carrito/>
      </div>      
    </header>
  )
}