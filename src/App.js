import logo from './logo.svg';
import './App.css';
import PokeAPI from './components/PokeAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://pokeapi.co/docs/v2#pokemon"
          target="_blank"
          rel="noopener noreferrer"
        >
          PokeAPI
        </a>
      </header>
      <section className="App-body">
        <PokeAPI/>
      </section>
    </div>
  );
}

export default App;
