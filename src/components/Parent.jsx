import React from 'react'
import Child from './Child'

const Parent = ({money}) => {
  return (
    <div>
        <h3>Parent</h3>
        <Child money={money}/>
      
    </div>
  )
}

export default Parent
