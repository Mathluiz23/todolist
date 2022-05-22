import React from 'react';
// import '../css/login.css';
import '../css/LoginStyle.css';

export default function Input({name, onclick, onChange, type, placeholder, label, className}){
  return(
    <>
      <input
        onChange={onChange}
        onclick={onclick}
        type={type}
        placeholder={placeholder}
        name={name}
        className={className}
      >
        {label}
      </input>
    </>
  );
}
