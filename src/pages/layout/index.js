/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import Header from './header';
import Main from './main';
/*eslint-enable no-unused-vars*/

class Layout extends Component {
  render() {
    return (
      <div className='Layout'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default Layout;
