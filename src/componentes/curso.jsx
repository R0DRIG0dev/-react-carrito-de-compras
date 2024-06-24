import { useContext } from 'react';
import './estilos/Curso.css';
import { ContextoTienda } from '../contexto/Tienda';

export default function Curso({unCurso}) {
  const {imagen, nombre, precio} = unCurso;
  const {manejadorClickCurso} = useContext(ContextoTienda);
  return(
    <article>
      <figure onClick={() => manejadorClickCurso(unCurso)}>
        <img src={`/public/${imagen}.jpg`} alt={`Imagen de ${nombre}`}/>
      </figure>
      <div className="article-preview">
        <h3>{nombre}</h3>
        <p>{precio}</p>
      </div>
    </article>
  )
}