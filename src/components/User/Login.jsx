import {login} from '../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import iconBlack from '../../assets/writerRoadIconBlack.png';
import './login.css';
import React from 'react';




const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isAuthenticated, error} = useSelector((state) => state.user);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();

        dispatch(login(username, password));
    
    }

    useEffect(() => {
        if(error){
            alert(error);
            //dispatch error
        }
        if(isAuthenticated){
            navigate("/");
        }
    },[isAuthenticated, navigate, dispatch, error])

  return (
    <div className='user_auth_form'>
        <div className='user_auth-title'>
                <img src={iconBlack} alt="web-icon-black" />
                <h3>Log into Writer's Road</h3>
            </div>
            <form className='user_auth_form-login' onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input onChange={(e)=> setUsername(e.target.value)} placeholder="Enter your username" value={username} name="username" type="text" />
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" value={password} name="password" type="password" />
                <button type="submit">Log In</button>
            </form>
    </div>
    
  )
}

export default Login