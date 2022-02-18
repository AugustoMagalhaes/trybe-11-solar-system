import React from 'react';
import Header from './components/Header';
import './App.css';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <p>Sistema Solar</p>
      </>
    );
  }
}

export default App;
