import React, { useEffect, useState } from 'react';
import './Confetti.css';

function Confetti() {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const particles = [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
      emoji: ['🎉', '🎊', '🎈', '🎁', '✨', '⭐'][Math.floor(Math.random() * 6)]
    }));

    setConfetti(particles);

    const interval = setInterval(() => {
      const newParticles = [...Array(20)].map((_, i) => ({
        id: Math.random(),
        left: Math.random() * 100,
        delay: 0,
        duration: 2 + Math.random() * 1,
        emoji: ['🎉', '🎊', '🎈', '🎁', '✨', '⭐'][Math.floor(Math.random() * 6)]
      }));

      setConfetti(prev => [...prev.slice(-30), ...newParticles]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="confetti-container">
      {confetti.map(particle => (
        <div
          key={particle.id}
          className="confetti"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}

export default Confetti;
