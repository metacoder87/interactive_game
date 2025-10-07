import { storageService } from './storageService';
import { Difficulty } from '../types/Difficulty';
import { Score } from '../types/Score';

const MAX_SCORES = 10;

export const scoreService = {
  getScores(difficulty: Difficulty): Score[] {
    const allScores = storageService.get<Score[]>('scores', []);
    return allScores
      .filter(score => score.difficulty === difficulty)
      .sort((a, b) => a.time - b.time);
  },

  addScore(score: Score): void {
    const allScores = storageService.get<Score[]>('scores', []);
    allScores.push(score);
    const sortedScores = allScores.sort((a, b) => a.time - b.time);
    const newScores = sortedScores.slice(0, MAX_SCORES);
    storageService.set('scores', newScores);
  },
};
