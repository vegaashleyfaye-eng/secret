import React, { useEffect, useState } from 'react';
import './FloatingDecorations.css';

function FloatingDecorations() {
  const [decorations, setDecorations] = useState([]);

  useEffect(() => {
    const items = [...Array(15)].map((_, i) => ({
      id: i,
      top: Math.random() * 80,
      left: Math.random() * 100,
      size: 20 + Math.random() * 40,
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
      emoji: ['🎁', '🎀', '🎊', '🎉', '🌟'][Math.floor(Math.random() * 5)]
    }));

    setDecorations(items);
  }, []);

  return (
    <div className="decorations-container">
      {decorations.map(decoration => (
        <div
          key={decoration.id}
          className="decoration"
          style={{
            top: `${decoration.top}%`,
            left: `${decoration.left}%`,
            fontSize: `${decoration.size}px`,
            animationDuration: `${decoration.duration}s`,
            animationDelay: `${decoration.delay}s`
          }}
        >
          {decoration.emoji}
        </div>
      ))}
    </div>
  );
}

export default FloatingDecorations;
