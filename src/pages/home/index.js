/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import config from '../../utils/particlesjs-config.js';
/*eslint-enable no-unused-vars*/

import './styles.css';

class Home extends Component {
  render() {
    return (
      <section className="Home">
        <div className='particles-container'>
          <h1 className='hero-header'>
            {'Hello, I\'m'} <span className='name'>Zack Moore</span>.
            <br />
            <span className='title'>{'I\'m a full-stack web developer'}</span>.
          </h1>
          <Particles params={config} height='40vw' />
        </div>
      </section>
    );
  }
}

export default Home;
