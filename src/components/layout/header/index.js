import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/test'>Test</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
