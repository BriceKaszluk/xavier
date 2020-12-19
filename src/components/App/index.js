import React, { useState } from 'react';
import './App.css';

//composants
import Montre from '../Watch';
import NavButtons from '../NavButtons';
import Chrono from '../Chrono';
import Rebours from '../Rebours';


const App = () => {

  const supports = ["Montre", "Chrono", "Rebours"];
  const [timeSupport, setTimeSupport] = useState();

  //TODO memory leak, peut être qu'un système useEffect pourrait arranger
  //pour changer le support en fonction du bouton cliqué
  const supportSelected = (event) => {
    switch(event.target.name) {
      case 'Montre':
        return setTimeSupport(<Montre />);
      case 'Chrono':
        return setTimeSupport(<Chrono />);
      case 'Rebours':
        return setTimeSupport(<Rebours />);
      default:
        break
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavButtons supportsNames={supports} supportSelected={supportSelected}/>
        </nav>
      </header>
      <main>
      <div className="time_support">
        {timeSupport}
      </div>
        <p>
          TimeRoad to become Dev
        </p>
      </main>
    </div>
  );
}


export default App;
