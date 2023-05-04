import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';
import logo from '../../assets/glasses-g5b9fffce8_640.jpg';

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img src={logo} alt="logo" />
      <ul className="navbar_page-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search Books</Link></li>
        <li><Link to="/books">My Books</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
      </ul>
      <div className="navbar_sign-links">
        <li><Link to="/login">Sign in</Link></li>
        <button><Link to="/signup">Sign up</Link></button>
      </div>
    </div>
  )
}

export default Navbar