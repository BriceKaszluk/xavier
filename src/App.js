import React from 'react';
import './App.css';
import { Montre } from './Montre';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <div className="montre">
             <Montre/>
           </div>
        <p>
          TimeRoad to become Dev
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Xavier
        </a>
      </header>
    </div>
  );
}


export default App;
