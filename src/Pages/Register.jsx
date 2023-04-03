import React from "react";
import avatar from "../img/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logp"></span>
        <span className="title"></span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{display:'none'}} type="file" id="file" />
          <label htmlFor="file">
            <img src={avatar}  />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already a user? Login </p>
      </div>
    </div>
  );
};

export default Register;
