import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { Link } from 'react-router-dom'
import facebookLogo from './images/facebook.svg'
import googleLogo from './images/google.svg'
import LoginProto from './images/LoginProto.svg'
import Afl from './images/AFL.svg'

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user_info')) {
      history('/login')
    }
  }, [])
  async function login() {
    console.warn("data", username, password)
    let item = { username, password }
    console.warn(item)
    let result = await fetch("http://localhost:8000/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = await result.json();
    console.warn("result", result)
    localStorage.setItem("user_info", JSON.stringify(result));
    history("/homepage")
  }

  return (

    <div className='col-sm-6 offset-sm-3'>
      <h1>Login</h1>
      <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' />
      <br />
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
      <br />
      <button onClick={login} className='btn btn-primary'>Login</button>

    </div>
  )
}
