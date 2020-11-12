import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import classnames from 'classnames';

const schema = yup.object().shape({
  email: yup.string().email().required("email обязательное поле"),
  user: yup.string().matches(/^[a-z0-9_]+$/i, "только латинскими буквами и цифрами").min(2, "минимум 2 символа").required(),
  password: yup.string().min(6, "минимум 6 символов").max(40).required(),
  checkpassword: yup.string()
  .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
  .min(6, "минимум 6 символов").max(40).required(),
});

export default () => {
  const [isSuccess, setSuccess] = React.useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = () => {
    console.log('sub')
    setSuccess(true);
    const data = watch();
    console.log(data);
  };  

  return (
    <div className="auth">
      <div className="auth__header">
        <h2>Зарегистрироваться</h2>
        <p>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      <form className="auth__form register__form" onSubmit={handleSubmit(onSubmit)}>
        {!isSuccess ? (
          <>
            <div className={classnames({
              "auth__field": true,
              "invalid": !!errors.email,
              "valid": !errors.email&&watch().email
            })}>
              <input name="email" type="email" placeholder="Введите email" ref={register}/>             
              <p className="auth__error">{errors.email?.message}</p>             
            </div>
            <div className={classnames({
              "auth__field": true,
              "invalid": !!errors.user,
              "valid": !errors.user&&watch().user
            })}>
              <input name="user" type="text" placeholder="Введите логин" ref={register}/>             
              <p className="auth__error">{errors.user?.message}</p>             
            </div>
            <div className={classnames({
              "auth__field": true,
              "invalid": !!errors.password,
              "valid": !errors.password&&watch().password
            })}>
              <input name="password" type="password" placeholder="Введите пароль" ref={register}/>             
              <p className="auth__error">{errors.password?.message}</p>             
            </div>
            <div className={classnames({
              "auth__field": true,
              "invalid": !!errors.checkpassword,
              "valid": !errors.checkpassword&&watch().checkpassword
            })}>
              <input name="checkpassword" type="password" placeholder="Введите пароль еще раз" ref={register}/>             
              <p className="auth__error">{errors.checkpassword?.message}</p>             
            </div>            
            <div className="auth__controls">
              <button tabIndex="0" className="auth__login" type="submit">
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
