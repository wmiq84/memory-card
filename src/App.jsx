import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import PokemonImages from './components/PokemonImages';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScore = (newScore) => {
    console.log('Updating currentScore to:', newScore);
    setCurrentScore(newScore);
    if (newScore > bestScore) {
      console.log('Updating bestScore to:', newScore);
      setBestScore(newScore);
    }
  };

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <PokemonImages updateScore={updateScore} />
    </div>
  );
}

export default App;