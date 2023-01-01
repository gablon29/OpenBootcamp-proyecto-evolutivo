import React from 'react'

const Ejemplo4 = (props) => {
  return (
      <div>
          <h1>
             *** Ejemplo de props.children *** 
          </h1>
          <h2>
              {props.nombre}
      </h2>
      {/** props.children pintara por defecto todo aquello que se encuentra
      entre las etiquetas de apertura y cierre de este componente 
      desde el componente de orden superior */}
          {props.children}
    </div>
  )
}

export default Ejemplo4