import React from 'react'
import './signup.css'
import axios from "axios";
import {useState} from 'react';
import {useCookies} from "react-cookie";

const Signup = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cookie, setCookies] = useCookies(["access-token"])
  
  const handleRegister = async (e) => {
    comparePassword();
    e.preventDefault();
    try{
      await axios.post("http://localhost:3001/users/register", {username, password});
      alert("You have Registered! Please login.")

    } catch(err){
      console.error(err)
    }
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  }

  const comparePassword = () => {
    if(confirmPassword !== password){
      alert("Passwords must match")
    }
  }



  return (
    <div className='register_container'>
      <form onSubmit={handleRegister}>
        <h2>Create Your Account</h2>
        <label htmlFor="userName">Username</label>
        <input value={username} type="text" id="userName" required placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password" >Password</label>
        <input value={password} type="password" id="password" required placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="confirmPassword" >Confirm Password</label>
        <input type="password" id="confirmPassword" required placeholder='Password' onChange={(e) => setConfirmPassword(e.target.value)}/>
        <p>By creating an account, you agree to our Term of Service and have read and understood the Privacy Policy</p>
        <button type="submit" className='register_button'>Submit</button>
      </form>
    </div>
  )
}

export default Signup