/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../presentational/header';
import Hero from '../../presentational/hero';
import About from '../../presentational/about';
import Contact from '../../presentational/contact';

const StyledHome = styled.section`

`;
/*eslint-enable no-unused-vars*/

class Home extends Component {
  render() {
    return (
      <StyledHome className='Home'>
        <Header />
        <Hero />
        <About />
        <Contact />
      </StyledHome>
    );
  }
}

export default Home;
