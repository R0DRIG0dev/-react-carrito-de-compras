import './estilos/Curso.css';

export default function Curso({unCurso}) {
  const {imagen, nombre, precio} = unCurso;

  return(
    <article>
      <figure >
        <img src={`/public/${imagen}.jpg`} alt={`Imagen de ${nombre}`}/>
      </figure>
      <div className="article-preview">
        <h3>{nombre}</h3>
        <p>{precio}</p>
      </div>
    </article>
  )
}