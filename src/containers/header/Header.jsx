import React from 'react'
import './header.css'
import {Link} from 'react-router-dom';
import img from '../../assets/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg';

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
          <div className="header-card-img">
            <h2>You don't have to embark on the journey alone.</h2>
            <img id="header-img" src={img} alt="header-img" />
          </div>
          <div className="header-card-author-info">
            <h2>Welcome to Writer's Road!</h2>
            <p>This is a place where you can share ideas, insight, and connect with others who have the burning desire to have thei stories be told to the world.</p>
            <p>Joins book clubs, read short stories, blog about your favorite books/authors.</p>
            <p>"I was struggling to get over writer's block, and what I ended up needing was a support system of others who are and have experienced similar situations." - Joshua Chu</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header