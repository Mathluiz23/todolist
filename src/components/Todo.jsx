import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { TiEdit } from 'react-icons/ti';
import { MdDeleteForever } from 'react-icons/md';
import '../css/App.css';

function Todo({ todos, doneTask, removeTask, updateTask,  }) {
  const [editTask, setEditTask] = useState({ value: ''});
  console.log(todos);
  
  function submitUpdate(value) {
    updateTask(editTask.id, value);
    setEditTask({
      value: ''
    });
  };

  if (editTask.id) {
    return <TodoForm edit={editTask} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => doneTask(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <MdDeleteForever
          onClick={() => removeTask(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEditTask({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
