import React from 'react';
import logo from './f0070229-coronavirus_artwork-spl.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ethan Kugler
        </p>
        <a
          className="App-link"
          href="https://www.worldometers.info/coronavirus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Data on COVID-19 Spread
        </a>
      </header>
    </div>
  );
}

export default App;
