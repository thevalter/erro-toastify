import React, { useState, useContext} from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { LoginContext } from '../context/auth';

const Login = () => {

  const { login } = useContext(LoginContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(user, password);
  };

  return (
    <div>

      <div>
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <label htmlFor="user">User</label>

          <input type="text" name="user" placeholder='Enter your username' onChange={e => setUser(e.target.value)} value={user} />

          <label htmlFor="password">Password</label>

          <input type="password" name="password" id="password" placeholder='Insert your password' onChange={e => setPassword(e.target.value)} value={password} />

          <button type="submit">Entrar</button>

        </form>

        <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      </div>
    </div>
  )
}

export default Login;