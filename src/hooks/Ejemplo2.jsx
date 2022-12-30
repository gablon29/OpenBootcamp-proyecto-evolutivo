/**
 * ejemplos de uso de los Hooks
 * - useState() => cambiar el estado de un componente, editarlo o manejarlo
 * - useRef() => identificar los valores. referenciar elementos dentro de la vista
 * --asegura el valor de una variable/pero no renderiza, solo cambia cuando renderiza por
 * otro efecto
 * - useEffect() => controlar los cambios en la vista cada vez que sucede un cambio
 */

import React, { useState, useRef, useEffect} from 'react'

const Ejemplo2 = () => {
    
    //creamos los valores iniciales para poder modificarlos
    const [calcular, setCalcular] = useState(0)
    const [calcular2, setCalcular2] = useState(0)

    //creamos la funcion para el useRef
    const miRef = useRef()

    const incrementar1 = () => {
        setCalcular(calcular + 1)
    }

    const incrementar2 = () => {
        setCalcular2(calcular2 + 2)
    }

    //ahora implementamos el useEffct

    /**
     * ? caso 1: ejecutar siempre un snippet de codigo
     * 
     * Cada vez que se ejecuta un cambio en el estado del componente 
     * se ejecuta aquello que este dentro del useEffect
     */

    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('MOSTRANDO REFERENCIA DENTRO DEL DOOM')
    //     console.log(miRef)
    // })

    /**
     * ? ejemplo 2: 
     * usamos el useEffect pero con que funcion queremos que se active
     * en este caso con contador1
     * cabe menciaonar que solo se puede usar un useEffect por que se toma siempre
     * el ultimo
     */
    // useEffect(() => {
    // console.log('cambio en el estado del componente')
    // console.log('MOSTRANDO REFERENCIA DENTRO DEL DOOM')
    // }, [calcular])
    
    /**
     * ? ejemplo 3: 
     * usamos el useEffect pero restringimos a los efectos que 
     * queremos que responda
     */
    
    
    useEffect(() => {
    console.log('cambio en el estado del componente')
    console.log('MOSTRANDO REFERENCIA DENTRO DEL DOOM')
    }, [calcular, calcular2])

  return (
    <div>
       <h1>
              ***Ejemplo de useState, useRef y useEffect***
          </h1>
          <h2>
              CONTADOR: {calcular}
          </h2>
          <h2>
              CONTADOR 2: {calcular2}
          </h2>
          
          {/**Elemento referenciado miRef */}

          <h4 ref={miRef}>
              Ejemplo de elemento referenciado
          </h4>

          {/**botones para incrementar contandores */}
         
          <button onClick={incrementar1}>Incrementando contador</button>
          <button onClick={incrementar2}>Cambiar Persona</button>
    </div>
  )
}

export default Ejemplo2
