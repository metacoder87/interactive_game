import React from 'react';
import { TileData } from '../types/TileData';
import '../styles/Tile.css';
import '../styles/NeonGlow.css';

interface Props {
  tile: TileData;
  onHover: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const getGlowClass = (color: string) => {
  switch (color) {
    case '#00ff00':
      return 'neon-glow-green';
    case '#0000ff':
      return 'neon-glow-blue';
    case '#ff00ff':
      return 'neon-glow-pink';
    case '#ffa500':
      return 'neon-glow-orange';
    case '#ff0000':
      return 'neon-glow-red';
    default:
      return '';
  }
};

const Tile: React.FC<Props> = ({ tile, onHover }) => {
  const { isFlipped, isBomb, adjacentBombs, color } = tile;

  const tileClasses = `tile ${isFlipped ? 'flipped' : ''}`;
  const glowClass = getGlowClass(color);

  const frontStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
  };

  const backStyle: React.CSSProperties = {
    backgroundColor: color,
    color: '#000',
  };

  return (
    <div className={tileClasses} onMouseEnter={onHover}>
      <div className="tile-inner">
        <div className="tile-front" style={frontStyle}></div>
        <div className={`tile-back ${glowClass}`} style={backStyle}>
          {isBomb ? '💣' : adjacentBombs > 0 && adjacentBombs}
        </div>
      </div>
    </div>
  );
};

export default Tile;
