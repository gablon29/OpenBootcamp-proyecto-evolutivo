import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('comportamiento cuando el componente se actualiza por una nueva----')
        console.log('-> newprops o por un nuevo estado setState')
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

export const DidUpdateHooks = () => {
    useEffect(() => {
         console.log('comportamiento cuando el componente se actualiza por una nueva----')
        console.log('-> newprops o por un nuevo estado setState')
    }) //no colocamos ninguna llave, por que si lo hacemos solo se ejecuta una sola vez
    
    return (
        <>
            <h1>
                Hello World
            </h1>
        </>
    )

}