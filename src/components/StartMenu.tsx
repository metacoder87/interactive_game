import React from 'react';
import { Difficulty } from '../types/Difficulty';

interface Props {
  onStartGame: (difficulty: Difficulty) => void;
}

const StartMenu: React.FC<Props> = ({ onStartGame }) => {
  return (
    <div className="start-menu">
      <h1>Neon Sweeper</h1>
      <div className="difficulty-buttons">
        <button onClick={() => onStartGame('Easy')}>Easy (1%)</button>
        <button onClick={() => onStartGame('Medium')}>Medium (3%)</button>
        <button onClick={() => onStartGame('Hard')}>Hard (5%)</button>
        <button onClick={() => onStartGame('Insane')}>Insane (95%)</button>
      </div>
    </div>
  );
};

export default StartMenu;
