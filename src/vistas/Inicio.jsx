import Curso from '../componentes/curso';
import {cursos} from '../datos.js'
import "./inicio.css";

export default function Inicio(){
  return (
    <>
      <div className='grillaCursos'>
        {cursos.map( curso =>(
          <Curso key={curso.imagen} unCurso={curso}/>
        ))}
      </div>
    </>
  )

}