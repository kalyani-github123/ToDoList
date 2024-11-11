import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm.jsx'
import Todo from './Todo.jsx';
import EditTodoForm from './EditToDoForm.jsx';

function ToDoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    console.log(todos);
  };

  let toggleComplete = (id) =>{
    setTodos(todos.map(todo=>todo.id===id? {...todo, completed:!todo.completed}:todo));
  }
let deleteTodo = (id) => {
  setTodos(todos.filter(todo=>todo.id!==id));
}
let editTodo = (id) => {
  setTodos(todos.map(todo=>todo.id===id? {...todo, isEditing:!todo.isEditing}:todo));
}

let editTask = (task, id) =>{
  setTodos(todos.map(todo=>todo.id===id? {...todo, task, isEditing: !todo.isEditing}:todo))
}
  return (
    <>
    
   
        <div className="ToDoWrapper">

        <h1>Things to Get Done.</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index)=>(
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
          ):(
          <Todo task={todo} key={index} toggleComplete = {toggleComplete} deleteTodo = {deleteTodo} editTodo={editTodo}/>
          )
        ))}
      </div>
    
    
    
      
    </>
    
  );
}

export default ToDoWrapper;