import React, { Component } from 'react';
import Control from '../../components/Control';
import Enhancements from '../../components/Enhancements';
import Micro from '../../components/Micro';
import Navbar from '../../components/Navbar';
import Sidetone from '../../components/Sidetone';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Navbar/>
        <Control/>
        <Micro/>
        <Sidetone/>
        <Enhancements/>
      </div>
    );
  }
}

export default App;
