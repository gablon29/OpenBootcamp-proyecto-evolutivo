import React, { Component, useEffect } from 'react'

export default class didMount extends Component { 
    
    componentDidMount() {
        console.log('comportamiento antes del que el componente sea añadido al DOM (renderizado)')
    }

    render() {
        return (
            <>
                <h1>
                    Hello World
            </h1>     
        </>
    )
}

}

export const DidMountHooks = () => {
    
    useEffect(() => {
        console.log('comportamiento antes de que el componente sea renderizado (añadido al DOM)')
    },[])

    return (
        <>
            <h1>
                    Hello World
            </h1>     
        </>
    )
}
