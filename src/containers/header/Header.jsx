import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_container-card">
        <div className="header-card-info">
          <p>LEARN FROM CRITIQUES</p>
          <h2>Road to become a Writer</h2>
          <p>Collaborate with fellow authors and writers to develop a solid foundation in creating stories successful. Writer's Road can provide insight and creativity towards your next novel.</p>
          <button><Link className="header_link-button" to="/signup">SIGN UP</Link></button>
        </div>
        <div className="header-card-author">
          
        </div>
      </div>
    </div>
  )
}

export default Header