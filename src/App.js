import React, { Component } from 'react';

import DatePicker from './containers/DatePicker/DatePicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DatePicker />
      </div>
    );
  }
}

export default App;
