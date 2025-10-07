import React, { useState } from 'react';
import './styles/App.css';
import './styles/GameBoard.css';
import './styles/Tile.css';
import './styles/StartMenu.css';
import { Difficulty } from './types';
import StartMenu from './components/StartMenu';
import GameBoard from './components/GameBoard';

function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  const handleStartGame = (selectedDifficulty: Difficulty) => {
    setDifficulty(selectedDifficulty);
  };

  return (
    <div className="App">
      {!difficulty ? (
        <StartMenu onStartGame={handleStartGame} />
      ) : (
        <GameBoard difficulty={difficulty} />
      )}
    </div>
  );
}

export default App;