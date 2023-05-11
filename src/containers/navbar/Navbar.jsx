import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';
import logo from '../../assets/glasses-g5b9fffce8_640.jpg';
import {useState} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () => {
  return (
  <>
    <li><Link className="navbar_link" to="/">HOME</Link></li>
    <li><Link className="navbar_link" to="/search">SEARCH BOOKS</Link></li>
    <li><Link className="navbar_link" to="/books">MY BOOKS</Link></li>
    <li><Link className="navbar_link" to="/reviews">REVIEWS</Link></li>
  </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar_container">
      <div className="navbar_container-logo">
        <img className="navbar-logo" src={logo} alt="logo" />
        <h2 className="navbar_title" >Writer's Road</h2>
      </div>
      <div className="navbar_page-links">
        <Menu/>
      </div>
      <div className="navbar_sign-links">
        <li><Link className="navbar_link" to="/users/login">LOG IN</Link></li>
        <button><Link className="navbar_link-button" to="/users/register">SIGN UP</Link></button>
      </div>
      <div className="navbar_menu-container">
        {toggleMenu 
          ? <RiCloseLine size={30} className='burger' onClick={()=> setToggleMenu(false)}/> 
          : <RiMenu3Line size={30} className='burger' onClick={()=> setToggleMenu(true)}/>
        }
      {toggleMenu && (
      <div className="navbar_menu-links">
        <div className="navbar_menu-page-links">
          <Menu/>
        </div>
        <div className="navbar_menu-sign-links">
          <li><Link className="navbar_link" to="/users/login">Sign in</Link></li>
          <button><Link className="navbar_link-button" to="/users/register">Sign up</Link></button>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}

export default Navbar