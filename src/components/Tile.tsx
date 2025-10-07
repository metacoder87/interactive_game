import React from 'react';
import { TileData } from '../types';

interface Props {
  tile: TileData;
  onHover: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Tile: React.FC<Props> = ({ tile, onHover }) => {
  const { isFlipped, isBomb, adjacentBombs, color } = tile;

  const getTileClass = () => {
    let className = 'tile';
    if (isFlipped) {
      className += ' flipped';
      if (isBomb) {
        className += ' bomb';
      }
    }
    return className;
  };

  const style: React.CSSProperties = {
    backgroundColor: isFlipped ? color : '#1a1a1a',
    boxShadow: isFlipped ? `0 0 10px ${color}, 0 0 20px ${color}` : `inset 0 0 5px ${color}`,
    color: isFlipped ? '#000' : color,
  };

  return (
    <div className={getTileClass()} style={style} onMouseEnter={onHover}>
      {isFlipped && (isBomb ? '💣' : adjacentBombs > 0 && adjacentBombs)}
    </div>
  );
};

export default Tile;
