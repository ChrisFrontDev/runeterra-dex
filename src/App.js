import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      champions: []
    }
  }

  componentDidMount() {
      fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .then(response =>response.json())
      .then(response => this.setState( {champions: Object.keys(response.data) } ))
      

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {  
          // this.state.champions.map(champion =>
          //     <h1 key={champion.id}>{champion.name}</h1>)
          this.state.champions.map(champion => 
          <h1>{champion}</h1>)
          }
        </header>
      </div>
    )
  }
}

export default App;
