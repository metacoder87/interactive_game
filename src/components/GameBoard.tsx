import React, { useState, useEffect } from 'react';
import { Difficulty, TileData } from '../types';
import Tile from './Tile';

interface Props {
  difficulty: Difficulty;
}

const GameBoard: React.FC<Props> = ({ difficulty }) => {
  const [board, setBoard] = useState<TileData[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [auraColor, setAuraColor] = useState('#000');

  const neonColorPalette = [
    '#00ff00', // 0 bombs (Green)
    '#0000ff', // 1 bomb (Blue)
    '#ff00ff', // 2 bombs (Pink)
    '#ffa500', // 3 bombs (Orange)
    '#ff0000', // 4+ bombs (Red)
  ];

  useEffect(() => {
    setBoard(createBoard(difficulty));
  }, [difficulty]);

  const handleTileHover = (row: number, col: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (gameOver) return;

    const newBoard = [...board];
    const tile = newBoard[row][col];

    if (tile.isFlipped) return;

    tile.isFlipped = true;

    const colorIndex = Math.min(tile.adjacentBombs, neonColorPalette.length - 1);
    const newColor = neonColorPalette[colorIndex];
    tile.color = newColor;
    setAuraColor(newColor);

    setBoard(newBoard);

    if (tile.isBomb) {
      setGameOver(true);
      // Trigger fireworks
      const fireworks = document.createElement('div');
      fireworks.className = 'fireworks';
      fireworks.style.top = `${e.clientY}px`;
      fireworks.style.left = `${e.clientX}px`;
      document.body.appendChild(fireworks);
      setTimeout(() => {
        document.body.removeChild(fireworks);
      }, 2000);
    } else {
      // Check for win condition
      const nonBombTiles = board.flat().filter(t => !t.isBomb);
      if (nonBombTiles.every(t => t.isFlipped)) {
        setGameOver(true);
        alert('You win!');
      }
    }
  };

  const createBoard = (difficulty: Difficulty): TileData[][] => {
    const [rows, cols] = getBoardSize(difficulty);
    const bombPercentage = {
      Easy: 0.01,
      Medium: 0.03,
      Hard: 0.05,
      Insane: 0.95,
    };

    const newBoard: TileData[][] = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({
        isBomb: false,
        isFlipped: false,
        adjacentBombs: 0,
        color: '#1a1a1a',
      }))
    );

    // Place bombs
    const totalBombs = Math.floor(rows * cols * bombPercentage[difficulty]);
    let bombsPlaced = 0;
    while (bombsPlaced < totalBombs) {
      const row = Math.floor(Math.random() * rows);
      const col = Math.floor(Math.random() * cols);
      if (!newBoard[row][col].isBomb) {
        newBoard[row][col].isBomb = true;
        bombsPlaced++;
      }
    }

    // Calculate adjacent bombs
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (newBoard[row][col].isBomb) continue;
        let count = 0;
        for (let r = -1; r <= 1; r++) {
          for (let c = -1; c <= 1; c++) {
            if (r === 0 && c === 0) continue;
            const newRow = row + r;
            const newCol = col + c;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && newBoard[newRow][newCol].isBomb) {
              count++;
            }
          }
        }
        newBoard[row][col].adjacentBombs = count;
      }
    }

    return newBoard;
  };

  const getBoardSize = (difficulty: Difficulty): [number, number] => {
    // For now, a fixed size
    return [20, 30];
  };

  return (
    <div className="game-board" style={{ '--aura-color': auraColor } as React.CSSProperties}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((tile, colIndex) => (
            <Tile
              key={colIndex}
              tile={tile}
              onHover={(e) => handleTileHover(rowIndex, colIndex, e)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default GameBoard;
