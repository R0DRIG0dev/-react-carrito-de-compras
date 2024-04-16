import {cursos} from '../datos.js'
import Curso from '../componentes/curso';
import "./inicio.css";

export default function Inicio(){
  return (
    <>
      <div className='grillaCursos'>
        {cursos.map( curso =>(
          <Curso key={curso.imagen} curso={curso}/>
        ))}
      </div>
    </>
  )

}