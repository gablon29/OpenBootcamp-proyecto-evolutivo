/**
 * fijamos en un componente todos los momentos del ciclo de 
 * vida
 */

import React, { useEffect } from 'react'

export default function AllCycles() {

    //el useEffect tiene que haber uno por componente siempre, se pueden pisar
    
    useEffect(() => {
        console.log('componente creado')

        /** "setInterval" => especifica un set por intervalos, un cambio que se genera por tiempo especifico  */
        const intervalId = setInterval(() => { 
            document.title = `${new Date()}`
            console.log('actualizacion del componente')
        }, 1000);

        return () => {
            console.log('componente va a desaparecer')
            document.title = `tiempo detenido`
            clearInterval(intervalId);
        }
    },[])
    
  return (
    <div>
      
    </div>
  )
}
