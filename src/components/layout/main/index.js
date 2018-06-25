import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home';
import Test from '../../pages/test';

import './styles.css';

class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/test' component={Test}/>
        </Switch>
      </section>
    );
  }
}

export default Main;
