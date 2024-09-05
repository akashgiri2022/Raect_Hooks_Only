import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
  return (
    <div>
      <h1>GrandParent</h1>
      <Parent money={500}/>
    </div>
  )
}

export default GrandParent
