import React from 'react';
import { Difficulty } from '../types/Difficulty';
import { useGameBoard } from '../hooks/useGameBoard';
import Grid from './Grid';
import Fireworks from './Fireworks';
import '../styles/GameBoard.css';

interface Props {
  difficulty: Difficulty;
}

const GameBoard: React.FC<Props> = ({ difficulty }) => {
  const { board, auraColor, fireworks, handleTileHover, handleFireworkComplete } = useGameBoard(difficulty);

  return (
    <div className="game-board" style={{ '--aura-color': auraColor } as React.CSSProperties}>
      <Grid board={board} onTileHover={handleTileHover} />
      {fireworks.map(fw => (
        <Fireworks
          key={fw.id}
          x={fw.x}
          y={fw.y}
          onComplete={() => handleFireworkComplete(fw.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
