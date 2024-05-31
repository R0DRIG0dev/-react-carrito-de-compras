// import useTienda from "../hooks/useTienda";
import {contextoTienda} from "../hooks/useTienda";//
import { useContext } from "react"; //
import "./estilos/Cabecera.css";

export default function Cabecera (){
  // const {areaSeleccionada} = useTienda();
  const algoo = useContext(contextoTienda);//
  return (
    <header className="cabecera">
      {/* <h1> {areaSeleccionada.nombre} </h1> */}
      <h1> {algoo.name} </h1>{/* */}
      <p> Elige un curso para llevarlo al carrito </p>
    </header>
  )
}