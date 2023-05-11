import React from 'react'
import './login.css'
import axios from "axios";
import {useState} from 'react';
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies("access-token");
  const navigate = useNavigate();


  const handleLogIn = async(e) => {
    e.preventDefault();
    try{
      const result = await axios.post("http://localhost:3001/users/login", {username, password});
      setCookies("access-token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className='login_container'>
      <form onSubmit={handleLogIn}>
        <h2>Log into Writer's Road</h2>
        <label htmlFor="userName">Username</label>
        <input value={username} id="userName" type="text" required placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input value={password} id="password" type="password" required placeholder='Password' onChange={e => setPassword(e.target.value)}/>
        <button className="login-button" type="submit">LOG IN</button>
      </form>
    
    </div>
  )
}

export default Login