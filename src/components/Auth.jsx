import React from 'react';
import {Link} from 'react-router-dom';
import Field from './Field';

export default () => {
  const handleClick = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="auth">
      <div className="auth__header">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста войдите в свой аккаунт</p>
      </div>
      <form className="auth__form">
        <Field obj={{type: "text", name:"user", placeholder: "Введите логин", valid: 0}}/>
        <Field obj={{type: "password", name:"password", placeholder: "Введите пароль"}}/>
        <div className="auth__controls">
          <button tabIndex="0" onClick={handleClick} className="auth__login" type="submit">Войти в аккаунт</button>
          <Link to="/register" tabIndex="0" className="auth__signin">Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
};
