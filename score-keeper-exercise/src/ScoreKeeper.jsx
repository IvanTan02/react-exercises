import { useState } from 'react';

function getInitState(numPlayers) {
  return new Array(numPlayers).fill(0);
}

export default function ScoreKeeper({ numPlayers, winScore }) {
  const [scores, setScores] = useState(() => getInitState(numPlayers));

  const addScore = (addIndex) => {
    const updatedScores = scores.map((score, index) => {
      if (index === addIndex) {
        return (score += 1);
      } else {
        return score;
      }
    });
    setScores(updatedScores);
  };

  const resetGame = () => {
    setScores(getInitState(numPlayers));
  };

  return (
    <div>
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player {index + 1}: {score}
              <button onClick={() => addScore(index)}>+Score</button>
              {score >= winScore && <span>WINNER!</span>}
            </li>
          );
        })}
      </ul>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}
