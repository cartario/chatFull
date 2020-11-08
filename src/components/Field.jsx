import React from 'react';

export default ({obj}) => {
  const {type, name, placeholder, valid} = obj;

  const getValid = (valid)=>{
    switch(valid){
      case 0:
        return 'invalid';
      case 1:
        return 'valid';
      default:
        return '';
    }
  }

  return (
    <div className={`auth__field ${getValid(valid)}`}>
      <input name={name} type={type} placeholder={placeholder} />
      <span className="auth__error">Введите корректный {placeholder.split(' ')[1]}</span>
    </div>
  )
};
