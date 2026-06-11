import React, { useState } from 'react';
import './App.css';
import InputSection from './components/InputSection';
import GreetingSection from './components/GreetingSection';

function App() {
  const [name, setName] = useState('');
  const [isGreeting, setIsGreeting] = useState(false);

  const handleCelebrate = (inputName) => {
    if (inputName.trim()) {
      setName(inputName);
      setIsGreeting(true);
    }
  };

  const handleReset = () => {
    setName('');
    setIsGreeting(false);
  };

  return (
    <div className="app-container">
      {!isGreeting ? (
        <InputSection onCelebrate={handleCelebrate} />
      ) : (
        <GreetingSection name={name} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
