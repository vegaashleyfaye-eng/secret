import React, { useEffect, useState } from 'react';
import './LandingPage.css';

function LandingPage({ onStart }) {
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    setAnimateTitle(true);
  }, []);

  return (
    <div className="landing-page">
      {/* Main Content */}
      <div className="landing-content">
        <div className="welcome-container">
          <h1 className={`welcome-title ${animateTitle ? 'animate' : ''}`}>
            Happy Birthday
          </h1>

          <p className="welcome-description">
            Create a special greeting for your loved one
          </p>

          {/* Call to Action Button */}
          <button className="start-btn" onClick={onStart}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
