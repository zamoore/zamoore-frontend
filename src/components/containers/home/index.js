/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../presentational/header';
import Hero from '../../presentational/hero';

const StyledHome = styled.section`

`;
/*eslint-enable no-unused-vars*/

class Home extends Component {
  render() {
    return (
      <StyledHome className='Home'>
        <Header />
        <Hero />
      </StyledHome>
    );
  }
}

export default Home;
