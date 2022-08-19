import React from 'react'
import Formulario from './Formulario';
import ListadoMiembros from './Listado Miembros';

const Main = ({
  verForm, mostrar, miembros, setMiembros, miembro,
  setMiembro, eliminarMiembro
}) => {
  return (
    <>
      {verForm ? (
        <main className="flex justify-center items-center flex-wrap gap-36 my-10">
          <Formulario
            miembros={miembros}
            setMiembros={setMiembros}
            miembro={miembro}
            setMiembro={setMiembro}
          />
          <ListadoMiembros
            miembros={miembros}
            setMiembro={setMiembro}
            eliminarMiembro={eliminarMiembro}
          />
        </main>
      ) : (
        <main className="flex flex-col items-center ">
          <h3 className="font-bold text-2xl">Maquetacion de la Actividad de las Familias usando JSON </h3>

          <p className="p-3">Para ingresar al Formulario y digitalizar los datos de su familia pueda hacer Click en el boton superior "Formulario" o haga <a onClick={mostrar}>click aqui</a></p>
        </main>
      )}
    </>
  )
}

export default Main