/**
 * Ejemplo Hooks
 * UseState()
 * UseContext()
 */

import React, { useState, useContext } from 'react'

/**
 * 
 * @returns primero inicializamos un Estado vacio para rellenarse con 
 * los datos del contexto del padre
 */
const contextoPropio = React.createContext(null)

const ComponenteUno = () => {
    
    const contexto = useContext(contextoPropio)

  return (
    <div>
          <h1>
              Usuario: {contexto.usuario}
          </h1>     
          {/** pintamos aqui ya el componente dos */}
          <h2>
              <ComponenteDos/>
          </h2>
    </div>
  )
}

const ComponenteDos = () => {
    
    const contexto = useContext(contextoPropio)

    

    return (
        <h1>
            Clase: { contexto.clase}
        </h1>
    )
}

const ComponenteTres = () => {
    const estadoInicial = {
        usuario: 'gabriel',
        clase: 1
    }
    //creamos el estado del componente
    
    const [estadoUno, setEstadoUno] = useState(estadoInicial);

    const actualizarSesion = () => {
        setEstadoUno(
            {
                usuario: 'lucas',
                clase: estadoUno.clase + 1
            }
        )
    }
    return (
        <contextoPropio.Provider value={estadoUno}>
            {/**Con el ."Provider" le inyectamos los datos al estado inicial del 
            componente uno y a su vez el componente uno inyecta al dos y este tendra
            acceso a los datos */}
            <h1>
                ***Ejemplo de useState y useContext***
            </h1>
            <ComponenteUno />
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </contextoPropio.Provider>
    )
    // estamos pasando datos entre componentes usando el useContext en lugar de props
}
export default ComponenteTres