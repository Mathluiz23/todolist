import React, { useEffect, useState } from 'react';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';
import '../css/App.css';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [tasksLocalStorage, setTasksLocalStorage] = useState(JSON.parse(localStorage.getItem('tarefa')));
  const [nameLocalStorage, setNameLocalStorage] = useState(JSON.parse(localStorage.getItem('user')));

  const { name } = nameLocalStorage;
  const nameUser = name.name;

  const task = localStorage.setItem('tarefa', JSON.stringify(tasksLocalStorage));
  console.log(task)
  
  useEffect(() => {
      const storage = tasksLocalStorage === null ? [] : tasksLocalStorage;
      setTodos(storage);
  }, [])
  
  function addTodo(todo) {
    if (!todo.text) {
      return;
    }

    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setTasksLocalStorage(newTodos);
  };

  function updateTask(todoId, newValue) {
    if (!newValue.text) {
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    setTasksLocalStorage(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  function removeTask(id) {
    const removedArray = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArray);
    setTasksLocalStorage(removedArray);
  };

  function doneTask(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
    setTasksLocalStorage(updatedTodos);
  };

  return (
    <>
      <h1 className="plan-tasks">What is your plan for today {nameUser} ?</h1>
      <div>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={ todos }
        doneTask={doneTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
      </div>
    </>
  );
}
