
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/todos';

function AddTodo() {
  const dispatch = useDispatch();
    const handleAddTodo = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const description = e.target[1].value;  
        const newTodo = {
            text: title,
            completed: false,
            description: description
        }
        dispatch(addTodo(newTodo));
    }


  return (
   <>

   <h1> Add Todo</h1>
    <form onSubmit={handleAddTodo}  style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '300px'}}>
       Todo Title: <input type="text" placeholder='Add todo  title' />
        Todo Description: <input type="text" placeholder='Add a new description' />

        <button type='submit'>Add Todo</button>
    </form>
   </>
  )
}

export default AddTodo
