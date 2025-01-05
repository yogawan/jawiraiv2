import React, { useState } from 'react';
import { requestToGroqAI } from './utilities/groq';
import './ai.css'
import { Link } from 'react-router-dom';

const JawirAI = () => {
  const [data, setData] = useState(null);

  const AskAI = async () => {
    const content = document.getElementById('content').value;
    const ai = await requestToGroqAI(content);
    setData(ai);
  };

  const AskAICard = async (value) => {
    const ai = await requestToGroqAI(value);
    setData(ai);
  };

  return (
    <div className='ai'>
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ai">JawirAI</Link></li>
          </ul>
      </nav>
      <div className="form">
        <div className="form-container">
          <input type="text" name="content" id="content" placeholder='Ayoo tanya sesuatu....'/>
          <button className='buttonSubmit' onClick={AskAI}>Kirim</button>
        </div>
      </div>
      <div>
        <br /><br /><br /><br />
      </div>
      {/* <h2>Answer</h2> */}
      <div className='answer'>
        {data}
      </div>
    </div>
  );
};

export default JawirAI;
