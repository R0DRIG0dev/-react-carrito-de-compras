import { useContext, useEffect, useState } from 'react';
import Curso from '../componentes/curso';

import "./inicio.css";
import { ContextoTienda } from '../contexto/Tienda.jsx';

export default function Inicio(){
  const {seleccion} = useContext(ContextoTienda);
  const [cursosFiltrados, setCursosFiltrados] = useState([]);
  async function recuperarCursosFiltrados() {
    const respuesta = await fetch('http://127.0.0.1:8000/api/cursos')
    const {cursos} = await respuesta.json()
    setCursosFiltrados(cursos.filter(unCurso => (unCurso.area_id === seleccion.id)));
  }
  useEffect(()=>{recuperarCursosFiltrados()},[seleccion])
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