import React from 'react';
import {Link} from 'react-router-dom';


export default () => {
  const handleClick = (e)=>{
    e.preventDefault();
  }

  return (
    <div className="register">
      <h2>Register</h2>  
      <Link to="/auth">Auth</Link><br/>
      <Link to="/">Home</Link>    <br/>
    </div>
  );
};
