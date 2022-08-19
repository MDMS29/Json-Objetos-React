import React from 'react'

const Miembro = ({ miembro, setMiembro, eliminarMiembro }) => {

  const { cargo, nombre, apellido, edad, hobbie, id } = miembro

  const handleEliminar = () => {
    // const respuesta = confirm('¿Desea eliminar este ?')

    // if (respuesta) {
    eliminarMiembro(id)
    // }
  }

  return (
    <div className="flex flex-col items-center w-[400px] h-[200px] mt-2 rounded-xl shadow-xl p-5 bg-white">
      <p className="font-semibold">Cargo: <span className="font-normal">{cargo}</span></p>
      <p className="font-semibold">Nombre: <span className="font-normal">{nombre}</span></p>
      <p className="font-semibold">Apellido: <span className="font-normal">{apellido}</span></p>
      <p className="font-semibold">Edad: <span className="font-normal">{edad}</span></p>
      <p className="font-semibold">Hobbie: <span className="font-normal">{hobbie}</span></p>

      <div className="mt-2">
        <button type="button" className="bg-blue-700 transition duration-700 hover:bg-blue-500 px-3 py-2 rounded-xl text-white uppercase font-bold" onClick={() => setMiembro(miembro)}>Editar</button> {/*Al hacerle click el setPaciente tomara los datos del Paciente que se quiere editar, esto llega hasta el componente de "App"*/}
        <button type="button" className="bg-red-700 transition duration-700 hover:bg-red-500 p-2 rounded-xl text-white uppercase font-bold" onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  )
}

export default Miembro