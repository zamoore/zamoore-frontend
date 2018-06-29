/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import Header from '../pages/layout/header';
import Main from '../pages/layout/main';
/*eslint-enable no-unused-vars*/

import './styles.css';

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
