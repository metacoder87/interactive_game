import React from 'react';
import { TileData } from '../types/TileData';
import Tile from './Tile';
import '../styles/Grid.css';

interface Props {
  board: TileData[][];
  onTileHover: (row: number, col: number, e: React.MouseEvent<HTMLDivElement>) => void;
}

const Grid: React.FC<Props> = ({ board, onTileHover }) => {
  return (
    <div className="grid">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((tile, colIndex) => (
            <Tile
              key={colIndex}
              tile={tile}
              onHover={(e) => onTileHover(rowIndex, colIndex, e)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
