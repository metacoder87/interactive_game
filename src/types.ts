
export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Insane';

export interface TileData {
  isBomb: boolean;
  isFlipped: boolean;
  adjacentBombs: number;
  color: string;
}
