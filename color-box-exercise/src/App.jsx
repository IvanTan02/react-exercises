import './App.css';
import ColorBoxGrid from './ColorBoxGrid';

const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'indigo', 'violet'];

function App() {
  return (
    <>
      <h1>Click on the Color Boxes</h1>
      <ColorBoxGrid colors={colors} />
    </>
  );
}

export default App;
