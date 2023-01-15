/**
 * Ejemplo de uso del "metodo" componentWillUnmount para componente clase
 * ejemplo de uso del Hooks para componente funcional
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('comportamiento antes de que el componente desaparezca')
    }

  render() {
    return (
      <div>
            <h1>
                Hello World
        </h1>
      </div>
    )
  }
}
export const ComponentWillUnmountHook = () => {
    useEffect(() => {
        return () => {
            console.log('comportamiento antes de que el componente desaparezca')
            
        }
    },[] //solo queremos que se ejecute una vez.
    )
        
}