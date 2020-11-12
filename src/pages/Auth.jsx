import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classnames from 'classnames';

const schema = yup.object().shape({
  email: yup.string().email().required('email обязательное поле'),
  password: yup.string().min(6, 'минимум 6 символов').max(40).required(),
});

export default () => {
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    history.push("/home")
  };

  return (
    <div className="auth">
      <div className="auth__header">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста войдите в свой аккаунт</p>
      </div>
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <div
          className={classnames({
            auth__field: true,
            invalid: !!errors.email,
            valid: !errors.email && watch().email,
          })}
        >
          <input name="email" type="email" placeholder="Введите email" ref={register} />
          <p className="auth__error">{errors.email?.message}</p>
        </div>

        <div
          className={classnames({
            auth__field: true,
            invalid: !!errors.password,
            valid: !errors.password && watch().password,
          })}
        >
          <input name="password" type="password" placeholder="Введите пароль" ref={register} />
          <p className="auth__error">{errors.password?.message}</p>
        </div>
        <div className="auth__controls">
          <button tabIndex="0" className="auth__login" type="submit">
            Войти в аккаунт
          </button>
          <Link to="/register" tabIndex="0" className="auth__signin">
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
};
