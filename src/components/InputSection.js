import React, { useState } from 'react';
import './InputSection.css';

function InputSection({ onCelebrate }) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onCelebrate(input);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-section">
      {/* Big Cakes */}
      <div className="input-cakes">
        <div className="cake-emoji cake-left">🎂</div>
        <div className="cake-emoji cake-right">🎂</div>
      </div>

      <div className="input-card">
        <p className="welcome">Welcome</p>
        <h1 className="title">Enter Name</h1>
        
        <div className="input-wrapper">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter the birthday person's name..."
            maxLength="50"
            className="name-input"
          />
          <button
            onClick={handleSubmit}
            className="celebrate-btn"
            disabled={!input.trim()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputSection;
