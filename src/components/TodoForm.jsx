import React, { useState } from 'react';

export default function TodoForm(props) {
  console.log(props)
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  
  function handleChange(e) {
    setInput(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
    
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update Task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
          <h4>Update</h4>
          </button>
        </>
      ) : (
        <>
          <div className="add-new-task">
            <input
              placeholder='Add new task'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
            />
            <button onClick={handleSubmit} className='todo-button'>
              <h4>Add Tarefa</h4>
            </button>
          </div>
        </>
      )}
    </form>
  );
}
