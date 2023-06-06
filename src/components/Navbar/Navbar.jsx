import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import icon from '../../assets/writerRoadIcon.png';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../actions/userActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleLogout = async(e) => {
      e.preventDefault();
      dispatch(logout());
  }


  return (
    <div className='navbar-container'>
        <img src={icon} alt="web icon" />
        <h2>Writer's Road</h2>
        <ul className='navbar-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/library'>My Library</Link></li>
            <li><Link to='/search'>SearchBooks</Link></li>
            <li><Link to='/review'>Reviews</Link></li>
        </ul>
        {isAuthenticated ? 
        <button className='navbar-logout' onClick={handleLogout}>Log Out</button>
         :
        <div className='navbar-user-button'>
            <div className='navbar-login'><Link to='/user/login'>LOG IN</Link></div>
            <div className='navbar-register'><Link to='/user/register'>SIGN UP</Link></div>
        </div>
}
    </div>
  )
}

export default Navbar