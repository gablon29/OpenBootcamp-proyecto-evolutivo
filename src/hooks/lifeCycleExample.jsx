import React, { Component } from 'react'

export default class lifeCycleExample extends Component { 

    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: solo se utiliza para inicializar una variable o el estado del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: justo cuando se acaba el montaje/creacion del componente, de renderizarlo')
    }

    componentDidUpdate() {
        console.log('DIDUPDATE: cuando se actualiza el componente, a traves de una props, setState, forceUpdate')
    }
    componentWillUnmount() {
        console.log('WILLUNMOUNT: el componente ya cumplio la funcion y debe desaparecer')
    }
}
