import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <div className="home_header-background">
        <div className='home_header-outer-container'>
          <div className='home_header-inner-container'>
            <div className='home_header-inner-about-container'>
                <div className='about-container'>
                  <p>COME JOIN US</p>
                  <h1>Critique and grow with other Writers!</h1>
                  <p>Browse books and create your own library. Talk with others about your favorite books and authors.</p>
                  <div className='about-container-register'><Link to='/user/register'>SIGN UP</Link></div>
                </div>
            </div>
            <div className='home_header-inner-image-scroll-container'>
              <div className='scroll-container'>
                
              </div>
            </div>
          </div>

        </div>

      </div>
    
    </>
  )
}

export default Home