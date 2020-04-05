import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'

const Formulario = ({crearCita}) => {

    //Crear el State de Citas, en este caso el state es local
    const[cita, actualizarCita] = useState({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
    });
    //State para controlar el error
    const [error, actualizarError] = useState(false)
    
    //funcion que se ejecuta cada vez que el usuario encribe en el input
    const actualizaState=e=>{
        //console.log('escribiendo...', e.target.value)
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }    
    //Extraer los valores
    const{ mascota, propietario,fecha, hora,sintomas}=cita;
    //Cuando el usuario envia formulario con sumitCita
    const submitCita = (e)=>{
        e.preventDefault()
       // alert('enviando formulario')

       //Validar
        if(mascota.trim()==='' || propietario.trim()==='' || fecha.trim()==='' || 
        fecha.trim()==='' || hora.trim()==='' || sintomas.trim()===''){
            //alert('hay un error')   
            actualizarError(true);
            return   
        }
        //desaparece mensaje de error 
        actualizarError(false);
       //Asignar un ID
        cita.id = uuid();
        //console.log(cita)
       //Crear una Cita
        crearCita(cita)
       //Reiniciar el form
       actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:'' 
       })

    }
    //después de ejecutar el script rertorna codigo html
    return(
        <Fragment>
            <h2>Crear Cita</h2>
            {error ?<p className="alerta-error">Todos los campos son obligatorios</p>
            : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={actualizaState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño"
                    onChange={actualizaState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizaState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
            </Fragment>
    )
}

export default Formulario