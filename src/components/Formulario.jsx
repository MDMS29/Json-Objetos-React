import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'
import familia from '../img/familia.jpg'

const Formulario = ({ miembros, setMiembros, miembro, setMiembro }) => {
  const [cargo, setCargo] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [hobbie, setHobbie] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {//Cada vez que paciente tenga algo que hara esta funcion
    if (Object.keys(miembro).length > 0) {//Si paciente tiene mas de 0 valores mostrara en el formulario la informacion que tiene el objeto "Paciente"
      setCargo(miembro.cargo)
      setNombre(miembro.nombre)
      setApellido(miembro.apellido)
      setEdad(miembro.edad)
      setHobbie(miembro.hobbie)
    }
  }, [miembro])

  const generarID = () => {
    const random = Math.random().toString(36).substr(16)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([cargo, cargo, nombre, apellido, edad, hobbie].includes('')) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }

    const miembroFamilia = {
      cargo: cargo,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      hobbie: hobbie
    }

    if (miembro.id) {
      miembroFamilia.id = miembro.id

      const miembroActualizado = miembros.map(miembroState => miembroState.id == miembro.id ? miembroFamilia : miembroState)

      setMiembros(miembroActualizado)
      setMiembro({})
    } else {
      miembroFamilia.id = generarID()
      setMiembros([...miembros, miembroFamilia]) //Se agrega un nuevo miembro como objeto literal
    }

    setCargo('')
    setNombre('')
    setApellido('')
    setEdad('')
    setHobbie('')
  }

  return (
    <>
      <form className="flex flex-col items-center w-auto shadow-2xl p-5 rounded-lg " onSubmit={handleSubmit}>
        <div className="flex py-3">
          <img src={familia} width="100px" />
        </div>
        {/*Se les debe colocar el value para poder reiniciar y escribir en los campos del formulario*/}
        <div className='w-full'>
          <select className='p-3 w-full mb-2 bg-gray-100 rounded-lg text-center' id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)}>
            <option>-Seleccione su cargo familiar</option>
            <option value="Papá">furioso</option>
            <option value="Mamá">furiosaa</option>
            <option value="Hijo">rapidin</option>
            <option value="Hija">la mas rapídita</option>
          </select>
        </div>
        <div className="flex gap-5 mb-2">
          <input className="p-3 w-auto bg-gray-100 rounded-lg text-center" type="text" placeholder="Ingrese sus Nombres" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input className="p-3 w-auto bg-gray-100 rounded-lg text-center" type="text" placeholder="Ingrese sus Apellidos" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="mb-2 w-full">
          <input className="p-3 w-full bg-gray-100 rounded-lg text-center" type="number" placeholder="Ingrese su Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </div>
        <div className="mb-2 w-full">
          <input className="p-3 w-full bg-gray-100 rounded-lg text-center" type="text" placeholder="Ingrese sus Hobbies" value={hobbie} onChange={(e) => setHobbie(e.target.value)} />
        </div>
        <div className="flex mt-2 w-full justify-center">
          <input className={miembro.id ? 'bg-blue-700 p-2 w-1/2 cursor-pointer rounded-xl text-white font-bold uppercase hover:bg-blue-500 transition duration-[.8s]' : 'bg-red-700 p-2 w-1/2 cursor-pointer rounded-xl text-white font-bold uppercase hover:bg-red-500 transition duration-[.8s]' } type="submit" value={miembro.id ? 'Editar' : 'Enviar'} />
        </div>
        {error && (<Error>Todos los campos deben ser llenados</Error>)}
      </form>
    </>
  )
}

export default Formulario