import './App.css';
import React, { Component } from 'react';
import FetchRandomUser from './Components/FetchRandomUser';

class App extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <div className="App-header">
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;
