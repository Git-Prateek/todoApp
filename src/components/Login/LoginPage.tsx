import React, { useState } from "react";
import "./LoginPage.css";
import users from '../../assets/users.json';
import { useHistory } from "react-router-dom";


interface LoginFormProps {
  setUser: (username: string) => void;
}
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const user = users.find((user) => user.useremail === e.target.email.value && user.password === e.target.password.value);
    if (user) {
      setUsername(user.username);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('user', user.username);
      history.push("/dashboard");
      // alert("Valid username or password");
    } else {
      alert("Invalid username or password");
    }
  };

{console.log('login page');}

  return (
    <div className="Login">
      <h1>Login to Continue</h1>
      <form className="form" onSubmit={handleSubmit} >
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="valid@gmail.com" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="primary" type="submit">LOGIN</button>
      </form>
    </div>
  );

}

export default LoginPage;
