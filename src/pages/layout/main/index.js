/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
/*eslint-enable no-unused-vars*/

import Home from '../../home';
import Article from '../../article';
import SignIn from '../../sign-in';

import './styles.css';

class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/articles/:articleId' component={Article}/>
          <Route path='/signin' component={SignIn}/>
        </Switch>
      </section>
    );
  }
}

export default Main;
