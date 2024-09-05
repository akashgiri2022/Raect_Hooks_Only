import React from 'react'
import Grandchild from './Grandchild'

const Child = ({money}) => {
  return (
    <div>
        <h4>Child</h4>
        <Grandchild money={money}/>
      
    </div>
  )
}

export default Child
