import { Difficulty } from './Difficulty';

export interface Score {
  name: string;
  time: number;
  difficulty: Difficulty;
  date: string;
}
