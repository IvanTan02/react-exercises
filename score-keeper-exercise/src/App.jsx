import './App.css';
import ScoreKeeper from './ScoreKeeper';

function App() {
  return (
    <div>
      <h1>Score Keeper</h1>
      <ScoreKeeper numPlayers={3} winScore={5} />
    </div>
  );
}

export default App;
