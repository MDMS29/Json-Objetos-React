import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
function App() {
  const [verForm, setVerForm] = useState(false)
  const [miembros, setMiembros] = useState(JSON.parse(localStorage.getItem('miembros')) ?? []) //Va a tomar los valore del localStorage para despues utilizarlos
  const [miembro, setMiembro] = useState({})//Editar los miembros

  const mostrar = (e) => {//Mostrar Formulario
    e.preventDefault()
    setVerForm(true)
  }
  const cerrar = (e) => { //Cerrar Formulario
    e.preventDefault()
    setVerForm(false)
  }

  const eliminarMiembro = (id) => {
    const miembrosActualizados = miembros.filter(miembro => miembro.id !== id)
    setMiembros(miembrosActualizados)
  }

  useEffect(() => {
    localStorage.setItem('miembros', JSON.stringify(miembros))
  }, [miembros]) //Cuando haya un cambio en los miembros se actualiza el localStorage

  return (
    <>
      <Header
        verForm={verForm}
        setVerForm={setVerForm}
        mostrar={mostrar}
        cerrar={cerrar}
      />
      <Main
        verForm={verForm}
        mostrar={mostrar}
        miembros={miembros}
        setMiembros={setMiembros}
        miembro={miembro}
        setMiembro={setMiembro}
        eliminarMiembro={eliminarMiembro}
      />
    </>
  );
}

export default App;
