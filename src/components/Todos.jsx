
import React from 'react'
import { useSelector } from 'react-redux'
import {getAllTodos} from '../features/todos'


function Todos() {
  const todos = useSelector(getAllTodos);
  console.log(todos);
  return (
    <div>
      
    </div>
  )
}

export default Todos
