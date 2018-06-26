/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*eslint-enable no-unused-vars*/

import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: !!localStorage.getItem('authToken')
    };
  }
  render() {
    return (
      <header className="Header">
        <nav>
          <Link to='/'>Home</Link>
          {this.state.authenticated === true &&
            <button type="button" onClick={this.signOut.bind(this)}>Sign Out</button>
          }
          <Link to='/signin'>Sign In</Link>
        </nav>
      </header>
    );
  }
  signOut() {
    localStorage.removeItem('authToken');
    this.setState({ authenticated: false });
  }
}

export default Header;
