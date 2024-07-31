import React from 'react';
import './About.css';
import check2 from '../../assets/img/check2.png'
import check from '../../assets/img/check.png'

function App() {
  return (
    <div className='first'>
      <div className="good">
        <h1>Good-bye to traditional startup hassle.</h1>
        <p>Say farewell to the complexities of the past and unlock a smoother path to success.</p>

      </div>
      <div className="about">
        <div className="square">
          <img src={check} alt="" />
          <h2>Creating Opportunities</h2>
          <p>Our software simplifies complex business processes, helping you efficiently manage tasks, projects, and resources. software simplifies complex business processes.</p>
        </div>
        <div className="square2">
        <img src={check2} alt="" />
          <h2>Bridging the gap</h2>
          <p>Take a step back and imagine how much time it takes to find solutions to your “technical” problems and how much time it takes to connect to your “fix-man”. Here at SKILLEDman, we offer you a 2 in 1 solution.</p>
        </div>
        <div className="square3">
        <img src={check} alt="" />
          <h2>Impeccable solutions</h2>
          <p>SKILLEDMan offers you<br/> time and resource for<br/> good and industry<br/> standard artisan solutions,<br/> Join us today and get<br/> minor problems done as<br/> soon as possible.</p>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
