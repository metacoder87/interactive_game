import React from 'react';
import { Score } from '../types/Score';
import '../styles/LeaderboardRow.css';

interface Props {
  score: Score;
  rank: number;
}

const LeaderboardRow: React.FC<Props> = ({ score, rank }) => {
  return (
    <div className="leaderboard-row">
      <div className="rank">{rank}</div>
      <div className="name">{score.name}</div>
      <div className="time">{score.time}s</div>
      <div className="date">{score.date}</div>
    </div>
  );
};

export default LeaderboardRow;
