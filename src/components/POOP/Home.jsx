import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import scroll1 from '../../assets/scroll1.png';
import scroll2 from '../../assets/scroll2.png';
import scroll3 from '../../assets/scroll3.png';


const Home = () => {

  const scrollArray = [scroll1, scroll2, scroll3];
  return (
    <>
      <div className="home_header-background">
        <div className='home_header-outer-container'>
          <div className='home_header-inner-container'>
            <div className='home_header-inner-about-container'>
                <div className='about-container'>
                  <p>COME JOIN US</p>
                  <h1>Critique and grow with other Writers!</h1>
                  <p>Browse books and create your own library. Write reviews and share your thoughts with others.</p>
                  <div className='about-container-register'><Link to='/user/register'>SIGN UP</Link></div>
                </div>
            </div>
            <div className='home_header-inner-image-scroll-container'>
              <div className='scroll-container'>
                  {scrollArray.map(scroll => {
                    return <img className='scroll-img' key={scroll} src={scroll} alt="scroll" />
                  })}
              </div>
            </div>
          </div>

        </div>

      </div>
  
    
    </>
  )
}

export default Home