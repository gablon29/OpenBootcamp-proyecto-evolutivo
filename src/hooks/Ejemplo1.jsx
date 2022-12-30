/**
 * creamos un compenonte de tipo funcion y acceder a su estado
 * privado a traves de un hooks, y poder modificarlo. 
 */

import React, { useState } from 'react'

const Ejemplo1 = () => {
    
    // valor inicial para un contador
    const valorInicial = 0

    //valor inicial para una persona
    const personaInicial = {
        nombre: 'gabriel',
        email: 'gabriel@asas'
    }

    /**
     * Queremos que ValorInicial y PersonaInicial sean parte del estado componente 
     * para poder modificarlo y que el cambio se vea en la vista del componente.
     * asi lo haremos
     * 
     * const [nombreVariable, funcionParaCambiar] = useState{valorInicial}
     */

    const [botonSuma, setBotonSuma] = useState(valorInicial)
    const [humano, setHumano] = useState(personaInicial)

    /**
     * funcion para modificar el estado del contador
     * incrementando el valor
     */

    const incrementarNumero = () => {
        // ? funcionParaCambiar(nuevoValor)
        setBotonSuma(botonSuma + 1)
    }

    /**
     * funcion para modificar el estado privado de persona
     * en el componente
     */

    const nuevaPersona = () => {
        setHumano({
            nombre: 'lucas',
            email: 'gabriel@asuu'
        })
    }
    
  return (
      <div>
          <h1>
              Ejemplo de useState
          </h1>
          <h2>
              CONTADOR: {botonSuma}
          </h2>
          <h2>
              DATOS DE LA PERSONA:
          </h2>
          <h2>
              Nombre: {humano.nombre}
          </h2>
          <h3>
              Email: {humano.email}
          </h3>
          <button onClick={incrementarNumero}>Incrementando contador</button>
          <button onClick={nuevaPersona}>Cambiar Persona</button>
    </div>
  )
}

export default Ejemplo1
