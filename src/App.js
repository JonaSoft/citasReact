import React,{Fragment, useState} from 'react';
import './index.css';
import Formulario from './components/formulario'

function App() {
// Arreglo de citas desde formulario para enviar al 2do componente.
const [citas, guardarCitas] = useState([])

//funcion q toma las citas actuales y agrega la nueva cita
const crearCita = cita =>{
  guardarCitas([
      ...citas,
      cita
  ])
}
console.log(citas)
  return (
    <Fragment>
        <h1>Administrador de Pacientes</h1>

        <div className="container">
            <div className="row">
                <div className="one-half column">
                  <Formulario
                    crearCita = {crearCita}
                  />
                </div>
                <div className="one-half column">
                   Citas 
                </div>
            </div>  
        </div>
    </Fragment>
  )
}

export default App;
