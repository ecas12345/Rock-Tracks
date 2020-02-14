import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Homepage from './Components/Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Homepage />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
