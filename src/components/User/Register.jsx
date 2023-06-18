import React from 'react'
import {registerUser} from '../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import iconBlack from '../../assets/writerRoadIconBlack.png';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { isAuthenticated, error} = useSelector((state) => state.user);
    const [filled, setFilled] = useState(false);

    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
    });

    const { name, username, password } = user;
   

    const handleChangedData = (e) => {
        setUser({...user,[e.target.name]: e.target.value });

        const arrayInputs = Object.values(user);
        const arrayLength = arrayInputs.filter(a => a !== "").length;
        if(arrayLength === 3){
            setFilled(true);
        }
    }

    const handleRegister = async(e) => {
        e.preventDefault();

        const restrictions = /^[a-z0-9_.-]{6,20}$/igm;

        if(password.length < 8) {
            alert("Password length must be atleast 8 characters");
            return;
        }
        if(!restrictions.test(username)){
            alert("Username cannot contain Unique symbols")
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('username', username);
        formData.append('password', password);
        //append vs set
        dispatch(registerUser(formData));
        
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
    <>
        <div className='user_auth_form'>
            <div className='user_auth-title'>
                <img src={iconBlack} alt="web-icon-black" />
                <h3>Sign up for Writer's Road</h3>
            </div>
            <form className='user_auth_form-register' encType="multipart/form-data" onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChangedData} placeholder='Enter your name' value={name} name="name" type="text" />
                <label htmlFor="username">Username</label>
                <input onChange={handleChangedData} placeholder="Enter your username" value={username} name="username" type="text" />
                <label htmlFor="password">Password</label>
                <input onChange={handleChangedData} placeholder="Enter your password" value={password} name="password" type="password" />
                <button disabled={!filled} type="submit">Sign Up</button>
            </form>
        </div>
    
    
    </>    
  )
}

export default Register