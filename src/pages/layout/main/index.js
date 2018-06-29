/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
/*eslint-enable no-unused-vars*/

import Home from '../../home';
import Articles from '../../articles';
import Article from '../../article';
import SignIn from '../../sign-in';

class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/articles' component={Articles}/>
          <Route exact path='/articles/:articleId' component={Article}/>
          <Route path='/signin' component={SignIn}/>
        </Switch>
      </section>
    );
  }
}

export default Main;
