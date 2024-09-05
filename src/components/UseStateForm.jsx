import React, { useState } from 'react'

function UseStateForm() {
    const [formData,setFormData]=useState({
        firstname:"",
        lastname:""
})
const handledata=(event)=>{
    const {name,value}=event.target; //destructure
    // console.log(event.target.name);
    // console.log(event.target.value);

    setFormData((prev)=>{
        return{...prev,[name]:value}
    })

}
  return (
    <>
    <div>
        <input type="text" value={formData.firstname} onChange={handledata} name="firstname"/>
        <input type="text" value={formData.lastname} onChange={handledata} name="lastname"/>
        <h2>{`${formData.firstname}  ${formData.lastname}`}</h2>
    </div> 
    </>
  )
}

export default UseStateForm
