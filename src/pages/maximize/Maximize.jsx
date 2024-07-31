import React from 'react';
import './maximize.css';
import img from '../../assets/img/plumber.png'

const Maximize = () => {
  return (
    <div className="page-container">
      <div className="rectangle-container">
        <div className="image-text-container">
          <div className="image-container">
          <img src={img} alt="" className="image2" />
          </div>
          
          <div className="text-container">
            <h1 className="main-text">Maximize your potential today and make life easy</h1>
            <p className="additional-text">Say farewell to the complexities of the past and unlock a smoother path to success.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maximize;
