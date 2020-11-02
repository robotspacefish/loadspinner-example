import React, { useState } from 'react';
import './App.css';
import LoadSpinner from './LoadSpinner/LoadSpinner';

function App() {
  // alternatively to useState, you could make
  // this a class and use state = {}, setState, etc
  const [isLoaded, setIsLoaded] = useState(false);

  const handleIsLoadedToggle = () => {
    setIsLoaded(currentIsLoaded => !currentIsLoaded)
  };

  return (
    <div className="App">
      <button onClick={handleIsLoadedToggle}>Toggle LoadSpinner</button>
      {isLoaded && <LoadSpinner />}
    </div>
  );
}


export default App;
