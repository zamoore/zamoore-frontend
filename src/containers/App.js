import React, { Component } from 'react';
import './App.css';

import Header from '../components/layout/header';
import Main from '../components/layout/main';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
