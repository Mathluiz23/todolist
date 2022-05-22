import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { FcTodoList } from 'react-icons/fc';
import '../css/LoginStyle.css';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });

  const [buttonLogin, setButtonLogin] = useState(true);

  function loginValidacao() {
    const regex = /.+@.+\.[A-Za-z]+$/;
    const minLength = 5;

    if (user.password.length > minLength && regex.test(user.email)) {
      setButtonLogin(false);
    } else {
      setButtonLogin(true);
    }
  }

  function handleChange({ target: { name, value } }) {
    setUser({
      ...user,
      [name]: value,
    });
    loginValidacao();
  }

  function handleClick() {
    const { email } = user;
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate("/task")
  }

  return (
    <div className='body-login'>
      <div className='titulo-todolist'>
        <h1>Todo List</h1>
        <a href="/"><FcTodoList size={40}/></a>
      </div>
        <Input
          onChange={ handleChange }
          type="email"
          placeholder="E-mail"
          name="email"
          className="input-login"
        />

        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={ handleChange }
          className="input-login"
        />

        <button
          disabled={ buttonLogin }
          type="button"
          onClick={ handleClick }
          className='button-entrar'
        >
          Sign In
        </button>
    </div>
  );
}