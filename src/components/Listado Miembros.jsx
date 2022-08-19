import React from 'react'
import Miembro from './Miembro'

const ListadoMiembros = ({miembros, setMiembro, eliminarMiembro}) => {
  return (
    <>
            <div className="flex flex-col justify-center items-center pt-auto pb-4 shadow-inner w-[500px] h-96 overflow-hidden bg-slate-50 scrollbar scrollbar-thumb-gray-600 ">
             <h1 className='uppercase font-bold text-2xl'>Lista de Familiares</h1>
             {miembros.map( (miembro) =>{
                return (
                    <Miembro 
                     key={miembro.id}
                     miembro={miembro}
                     setMiembro={setMiembro} 
                     eliminarMiembro={eliminarMiembro}
                     /> 
                )
             } )}
            </div>
    </>
  )
}

export default ListadoMiembros