import React from 'react'
import { Componenteclase } from '../models/component.class';
import  ComponenteB  from '../componentB/ComponenteB';



const componenteAb = () => {
    
    const defaultcontact = new Componenteclase('example', 'defaul', 'guipeo', false)

  return (
      <div>
          <ComponenteB contacto={defaultcontact}/>
    </div>
  )
}


export default componenteAb