import './App.css';
import Game from './components/Game';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>WORDLE</h1>
      </nav>
      <Game/>
      <Keyboard/>
    </div>
  );
}

export default App;
