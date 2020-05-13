import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Montre = (props) => {
  const currentDate = new Date();
  const heures = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const secondes = currentDate.getSeconds();

  const [date, setDate] = useState([heures, minutes, secondes]);
  useEffect(() => {
      setTimeout(() => {setDate([heures, minutes, secondes])} , 1000)
  })

  return (<h1>{heures} : {minutes} : {secondes}</h1>);
}






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Montre/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
