import React, { memo } from 'react'

const Todo = ({todos,addTodo}) => {
    console.log("Todo component");
    

  return (
    <>
      <h2>ToDo</h2>
      {todos.map((ele,i)=>{
        return <p key={i}>{ele+i}</p>
      })}
      <button onClick={addTodo}>Add</button>
    </>
  )
}

export default memo(Todo)
