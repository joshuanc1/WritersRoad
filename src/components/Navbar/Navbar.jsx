import React from 'react'
import './navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon from '../../assets/writerRoadIcon.png';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../actions/userActions';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [location, setLocation] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = async(e) => {
      e.preventDefault();
      dispatch(logout());
      navigate('/');
  }

    const path = useLocation().pathname;
    
    useEffect(()=>{
      setLocation(path.split("/")[2]);
    },[location,path])

  


  return (
    <div className={`navbar-container  ${location === "login" || location === "register" ? "black" : ""} `}>
        <img src={icon} alt="web icon" />
        <h2>Writer's Road</h2>
        <ul className='navbar-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/library'>My Library</Link></li>
            <li><Link to='/search'>SearchBooks</Link></li>
            <li><Link to='/me/reviews'>Reviews</Link></li>
        </ul>
        {isAuthenticated ? 
        <button className='navbar-logout' onClick={handleLogout}>Log Out</button>
         :
        <div className='navbar-user-button'>
            <div className='navbar-login'><Link to='/user/login'>LOG IN</Link></div>
            <div className='navbar-register'><Link to='/user/register'>SIGN UP</Link></div>
        </div>
        }
        
        <FontAwesomeIcon className='hamburger' icon={faBars} onClick={() => {setMenuVisible(!menuVisible)}}/>
        {menuVisible && 
        
        <div className='navbar_menu'>
          
            <li onClick={() => {setMenuVisible(!menuVisible)}}><Link to='/'>Home</Link></li>
            <li onClick={() => {setMenuVisible(!menuVisible)}}><Link to='/library'>My Library</Link></li>
            <li onClick={() => {setMenuVisible(!menuVisible)}}><Link to='/search'>SearchBooks</Link></li>
            <li onClick={() => {setMenuVisible(!menuVisible)}}><Link to='/me/reviews'>Reviews</Link></li>
          
        {isAuthenticated ? 
        <div onClick={handleLogout}>Log Out</div>
         :
        <div className='navbar_menu-button'>
            <div onClick={() => {setMenuVisible(!menuVisible)}}><Link to='/user/login'>Log In</Link></div>
            <div onClick={() => {setMenuVisible(!menuVisible)}}><Link to='/user/register'>Sign Up</Link></div>
        </div>
        }

        </div>
        
        }
    </div>
  )
}

export default Navbar