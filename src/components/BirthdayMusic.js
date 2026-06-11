import React, { useEffect, useRef, useState } from 'react';

function BirthdayMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(err => {
          console.error('Play error:', err);
          alert('Audio cannot play - check browser permissions or try clicking the button');
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000
    }}>
      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        style={{ display: 'none' }}
      >
        <source 
          src="https://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" 
          type="audio/ogg"
        />
        <source 
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" 
          type="audio/mpeg"
        />
      </audio>
      
      <button
        onClick={toggleMusic}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: '#FFD700',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        }}
        title={isPlaying ? 'Mute' : 'Play Music'}
      >
        {isPlaying ? '🎵' : '🎶'}
      </button>
    </div>
  );
}

export default BirthdayMusic;
