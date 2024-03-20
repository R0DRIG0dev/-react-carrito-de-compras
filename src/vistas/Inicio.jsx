import {cursos} from '../datos.js'

export default function Inicio(){
  return (
    <>
      <div className='grillaCursos'>
        <ul>
            {cursos.map(unCurso =>(
                <li key={unCurso.id} >{unCurso.nombre}</li>
            ))}
        </ul>
      </div>
    </>
  )

}