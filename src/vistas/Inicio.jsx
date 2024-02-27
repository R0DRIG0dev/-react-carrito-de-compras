import {cursos} from '../datos';
// import Curso from '../componentes/curso';
// import useCodea from '../hooks/useCodea';
// import "./estilos/inicio.css";

export default function Inicio() {
//   const { areaActual } = useCodea();
//   const cursosFiltrados = cursos.filter( unCurso => unCurso.area_id === areaActual.id );
  return (
    <>
      <div className='grillaCursos'>
        <ul>
            {cursos.map(bbbbbb =>(
            //   <Curso key={bbbbbb.imagen} unCurso={bbbbbb}/>
                <li>{bbbbbb.nombre}</li>
            ))}
        </ul>
      </div>
    </>
  )
}