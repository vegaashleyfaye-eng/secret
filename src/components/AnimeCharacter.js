import React, { useState, useEffect } from 'react';
import './AnimeCharacter.css';

function AnimeCharacter() {
  const [characters, setCharacters] = useState([
    { name: "Gon", id: 2, fallback: "https://via.placeholder.com/200x300/6366f1/ffffff?text=Gon" },
    { name: "Killua", id: 4, fallback: "https://via.placeholder.com/200x300/6366f1/ffffff?text=Killua" },
    { name: "Doraemon", id: 5, fallback: "https://via.placeholder.com/200x300/6366f1/ffffff?text=Doraemon" },
    { name: "Naruto", id: 1, fallback: "https://via.placeholder.com/200x300/6366f1/ffffff?text=Naruto" },
    { name: "Luffy", id: 3, fallback: "https://via.placeholder.com/200x300/6366f1/ffffff?text=Luffy" }
  ]);

  useEffect(() => {
    const fetchCharacterImages = async () => {
      const characterIds = [2, 4, 5, 1, 3];
      
      const updatedCharacters = await Promise.all(
        characters.map(async (char, idx) => {
          try {
            const response = await fetch(`https://api.jikan.moe/v4/characters/${characterIds[idx]}`);
            if (response.ok) {
              const data = await response.json();
              const imageUrl = data.data?.images?.jpg?.image_url;
              if (imageUrl) {
                return { ...char, image: imageUrl };
              }
            }
          } catch (error) {
            console.log(`Could not fetch ${char.name}`);
          }
          return char;
        })
      );
      
      setCharacters(updatedCharacters);
    };

    fetchCharacterImages();
  }, []);

  const positions = ['sticker-1', 'sticker-2', 'sticker-3', 'sticker-4', 'sticker-5'];

  return (
    <div className="stickers-container">
      {characters.map((char, idx) => {
        const imageUrl = char.image || char.fallback;
        return (
          <div 
            key={idx} 
            className={`character-sticker ${positions[idx]}`}
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <img 
              src={imageUrl}
              alt={char.name}
              className="sticker-image"
              onError={(e) => {
                e.target.src = char.fallback;
              }}
            />
            <div className="sticker-shadow"></div>
          </div>
        );
      })}
    </div>
  );
}

export default AnimeCharacter;
