import React from 'react';
import './Hero.css';
import Point from '../../assets/img/Point.png'
import log from '../../assets/img/log.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-full'>  
            <div className='hero-content'>
                <h1>Need a Fix?</h1>
                <h2>Call an artisan today.</h2>
                <h3>
                  From intuitive task management to advanced data analytics, our software equips you 
                  with the tools you need to thrive in today's competitive business landscape.
                </h3>
                <div className='lol'>
                  <ul><button className='hero-button'>Call an artisan</button></ul>
                  <img className='hero-image' src={Point} alt="Point illustration" />
                </div>
                
            </div>  
            <div className='cta-box'>
                <p className='cta-text'>Secure your spot right now</p>
                <p className='cta-subtext'>Be the first to know when the product launches and other not-to-miss updates.</p>
                <input className='cta-input' type="text" placeholder="Your Name" />
                <input className='cta-input2' type="text" placeholder="Username" />
                <button className='cta-button'>Join our service today</button>
                <div className='log'>
                <img  src={log} alt="" />
                </div>
            </div>
        </div>  
    </div>
  );
};

export default Hero;
