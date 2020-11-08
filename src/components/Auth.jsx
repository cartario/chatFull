import React from 'react';

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
        <div className="auth__field auth__field--user invalid">
          <input name="user" type="text" placeholder="Введите логин" />
          <span className="auth__error">Введите корректный логин</span>
        </div>
        <div className="auth__field auth__field--password valid">
          <input name="password" type="password" placeholder="Введите пароль" />
          <span className="auth__error">Введите корректный пароль</span>
        </div>

        <div className="auth__controls">
          <button tabIndex="0" onClick={handleClick} className="auth__login" type="submit">Войти в аккаунт</button>
          <div tabIndex="0" className="auth__signin">Зарегистрироваться</div>
        </div>
      </form>
    </div>
  );
};
