import { useContext } from "react";
import "./estilos/Carrito.css";
import { ContextoTienda } from "../contexto/Tienda";


export default function Carrito(){
  const {contenidoCarrito} = useContext(ContextoTienda);
  return (
    <ul>
      <li className="submenu">
          <img id="carrito-logo" src="/public/cart.png"/>
          <div id="carrito">
              {contenidoCarrito.length === 0 ? (
                  <p>no tienes cursos en el carrito</p>
              ):(
                  <>
                  <table id="lista-carrito" className="u-full-width">
                      <thead>
                          <tr>
                              <th>Imagen</th>
                              <th>Nombre</th>
                              <th>Precio</th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>
                          {contenidoCarrito.map( unCurso => (
                              <tr key={unCurso.id}>
                                  <td> <img src={`../public/${unCurso.imagen}.jpg`} width="100"/> </td>
                                  <td> {unCurso.nombre} </td>
                                  <td> {unCurso.precio} </td>
                                  <td> <a data-id={unCurso.id}> X </a> </td>                                            
                              </tr>
                          ))}
                      </tbody>
                  </table>
                  <a className="button u-full-width">VACIAR CARRITO</a>
                  </>
              )}
          </div>
      </li>
    </ul>
  )
}