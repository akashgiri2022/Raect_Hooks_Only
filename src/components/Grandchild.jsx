import React, { useContext } from 'react'
import { OwnContext } from './UseContext'

const Grandchild = ({money}) => {
  const {moneyFromContextApi_1,moneyFromContextApi_2}=useContext(OwnContext)
  return (
    <div>
        <h2>I have {money}</h2>
        <h3>I have money from contextApi {moneyFromContextApi_2}</h3>
        <h5>I have money from contextApi {moneyFromContextApi_1}</h5>
      
    </div>
  )
}

export default Grandchild
