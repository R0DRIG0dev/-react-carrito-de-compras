import { useContext } from 'react';
import Curso from '../componentes/curso';
import {cursos} from '../datos.js'
import "./inicio.css";
import { ContextoTienda } from '../contexto/Tienda.jsx';

export default function Inicio(){
  const {seleccion} = useContext(ContextoTienda);
  const cursosFiltrados = cursos.filter( unCurso => unCurso.area_id === seleccion.id);
  return (
    <>
      <div className='grillaCursos'>
        {cursosFiltrados.map( curso =>(
          <Curso key={curso.imagen} unCurso={curso}/>
        ))}
      </div>
    </>
  )

}