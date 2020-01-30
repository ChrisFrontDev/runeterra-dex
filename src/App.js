import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      champions: [
        {
          name: "Katarina",
          id: "01",
        },
        {
          name: "Akali",
          id: "02"
        },
        {
          name: "Sylas",
          id: "03"
        },
        
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { this.state.champions.map(champion =>
              <h1 key={champion.id}>{champion.name}</h1>)
          }
        </header>
      </div>
    )
  }
}

export default App;
