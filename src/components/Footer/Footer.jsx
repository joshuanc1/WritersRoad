import React from 'react'
import './footer.css';
import linkedln from '../../assets/linkedlnIcon (2) (1).png';
import github from '../../assets/githubIconn.png';

const Footer = () => {
  return (
    <div className='footer_background'>
        <div>Copyright &#xA9; 2023. All rights reserved</div>
        <div className='foot_icon'>
            <a href="https://www.linkedin.com/in/joshua-chu-n/" target="blank">
            <img src={linkedln} alt="linked" style={{width:25, height: 25}} />
            </a>
            <a href="https://github.com/joshuanc1" target="blank">
                <img src={github} alt="github" style={{width:25, height: 25}}/>
            </a>
        </div>


    </div>
  )
}

export default Footer