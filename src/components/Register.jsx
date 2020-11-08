import React from 'react';
import { Link } from 'react-router-dom';
import Field from './Field';

export default () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  const isSuccess = false;

  return (
    <div className="auth">
      <div className="auth__header">
        <h2>Зарегистрироваться</h2>
        <p>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      <form className="auth__form register__form">
        {!isSuccess ? (
          <>
            <Field obj={{ type: 'email', name: 'email', placeholder: 'Введите email', valid: 0 }} />
            <Field obj={{ type: 'text', name: 'user', placeholder: 'Введите логин', valid: 1 }} />
            <Field obj={{ type: 'password', name: 'password', placeholder: 'Введите пароль' }} />
            <Field
              obj={{
                type: 'password',
                name: 'check-password',
                placeholder: 'Введите пароль еще раз',
              }}
            />
            <div className="auth__controls">
              <button tabIndex="0" onClick={handleClick} className="auth__login" type="submit">
                Зарегистрироваться
              </button>
              <Link to="/auth" tabIndex="0" className="auth__signin">
                У меня уже есть аккаунт!
              </Link>
            </div>
          </>
        ) : (
          <div className="register__info">
            <h2>Подтвердите свой аккаунт</h2>
            <p>На вашу почту отправлено письмо с ссылкой для подтверждения аккаунта</p>
            <Link to="/auth">Войти</Link>
          </div>
        )}
      </form>
    </div>
  );
};
