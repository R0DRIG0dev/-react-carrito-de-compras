import { useContext } from "react";
import "./estilos/Cabecera.css";
import { ContextoTienda } from "../contexto/Tienda";

export default function Cabecera (){
  const {seleccion} = useContext(ContextoTienda);
  return (
    <header className="cabecera">
      <h1>{seleccion.nombre}</h1>
      <p> Elige un curso para llevarlo al carrito </p>
    </header>
  )
}