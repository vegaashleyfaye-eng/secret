import React, { useEffect, useRef, useState } from 'react';
import './GreetingSection.css';
import Confetti from './Confetti';
import FloatingDecorations from './FloatingDecorations';
import Cake from './Cake';
import AnimeCharacter from './AnimeCharacter';

function GreetingSection({ name, onReset }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const audioContextRef = useRef(null);

  const messages = [
    "Wishing you a day filled with joy and laughter! 🌟",
    "May all your dreams come true! ✨",
    "Have an amazing day! 🎊",
    "You deserve all the happiness in the world! 💝",
    "Here's to another year of adventure! 🚀"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  // Play a simple happy birthday tune using Web Audio API
  useEffect(() => {
    const playHappyBirthdayTune = () => {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioContext;

        const playMelody = (startTime) => {
          // Simple happy birthday melody notes (C, C, D, C, F, E)
          const notes = [262, 262, 294, 262, 349, 330]; // frequencies in Hz
          const duration = 0.5; // seconds per note

          notes.forEach((frequency, index) => {
            const noteStartTime = startTime + index * duration;
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, noteStartTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, noteStartTime + duration);

            oscillator.start(noteStartTime);
            oscillator.stop(noteStartTime + duration);
          });

          // Melody duration is 6 notes * 0.5 seconds = 3 seconds
          return startTime + 6 * duration;
        };

        // Play the melody and schedule it to loop
        let nextPlayTime = audioContext.currentTime;
        const playLoop = () => {
          nextPlayTime = playMelody(nextPlayTime);
          // Schedule the next loop after this melody finishes
          setTimeout(playLoop, 3000); // 3000ms = 3 seconds (duration of melody)
        };

        playLoop();
      } catch (err) {
        console.log("Web Audio API not available:", err);
      }
    };

    // Play tune on component mount
    playHappyBirthdayTune();
  }, []);

  return (
    <div className="greeting-section">
      <Confetti />
      <FloatingDecorations />
      <AnimeCharacter />

      {/* Cakes */}
      <div className="cakes-container">
        <Cake position="left" />
        <Cake position="right" />
      </div>

      {/* Big Center Cake */}
      <div className="big-center-cake">🎂</div>

      {/* Main Content */}
      <div className="greeting-content">
        <h1 className="greeting-text">
          Happy Birthday, <span className="name">{name}</span>! 🎂
        </h1>

        {/* Balloons */}
        <div className="balloon-group">
          <div className="balloon b1">🎈</div>
          <div className="balloon b2">🎈</div>
          <div className="balloon b3">🎈</div>
          <div className="balloon b4">🎈</div>
          <div className="balloon b5">🎈</div>
        </div>

        {/* Message */}
        <div className="message-display">
          <p className="message">{messages[messageIndex]}</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button onClick={onReset} className="btn btn-primary">
            New Greeting
          </button>
        </div>
      </div>

      {/* Floating Stars */}
      <div className="stars-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.1}s`
          }}>
            ⭐
          </div>
        ))}
      </div>
    </div>
  );
}

export default GreetingSection;
