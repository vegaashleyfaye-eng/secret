import React from 'react';
import './Cake.css';

function Cake({ position }) {
  return (
    <div className={`cake-container cake-${position}`}>
      <div className="cake">
        <div className="cake-base">
          <div className="cake-layer cake-layer-1"></div>
          <div className="cake-layer cake-layer-2"></div>
          <div className="cake-layer cake-layer-3"></div>
        </div>
        <div className="candle">
          <div className="flame"></div>
        </div>
        <div className="candle candle-2">
          <div className="flame"></div>
        </div>
        <div className="candle candle-3">
          <div className="flame"></div>
        </div>
      </div>
    </div>
  );
}

export default Cake;
