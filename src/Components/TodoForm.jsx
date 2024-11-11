import React from 'react'
import { useState } from 'react'
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('')
    }
  return (
    <>
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input type="text" className='todo-input' value={value} placeholder='Enter Your Todays task' onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>

    </>
  )
}
export default TodoForm