import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"></span>
        <span className="title"></span>
        <form>
        
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          
          <button>Login</button>
        </form>
        <p>New User? Register </p>
      </div>
    </div>
  );
}

export default Login