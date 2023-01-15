import React, { useEffect, useState } from 'react'

const ManoPropia = () => {

    const InitialState = {
        nombre: 'Gabriel',
        Apellido: 'Londero',
        Fecha: new Date(),
        edad: 0
    }

    // * using useState and generate new State

    const [state, setNewState] = useState(InitialState);

    // create the arrow function
    
    const functionReloj = () => {
        setNewState(() => {
            let edad = state.edad +1;
            return {
                ...state,
                Fecha: new Date(),
                edad
            }
        })
    }

    // * using useEffect

    useEffect(() => {
        const timerID = setInterval(() => functionReloj(), 1000)
        
        return () => {
            clearInterval(timerID)
        }
    },)

  return (
      <div>
          <h1>
              Hora Actualizada:
              {state.Fecha.toLocaleString()}
          </h1>
          <h2>
              Nombre y Apellido:
              {state.nombre} {state.Apellido}
          </h2>
          <h3>
              Edad: 
              {state.edad}
          </h3>
      
    </div>
  )
}

export default ManoPropia
