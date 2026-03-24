
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { removeTodo} from '../../features/todos';



function Todos() {
  const todos = useSelector((state) => state.todos.value);

  const dispatch = useDispatch();
 
  return (
    
        <ul>

      {todos ? (
            todos.map((todo,index) => (
                <li key={index}>
                <div>
                     <h1>Todos Id: {index+1}</h1>
                    <p>Todos Text: {todo.text}</p>
                    <p>Todos Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
                    <p>Todos Description: {todo.description}</p>
                    
                </div>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    
                </li>

            ))
        ):(
            <p>No todos found</p>
        )}
        </ul>
    
  )
}

export default Todos
