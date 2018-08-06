/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import styled from 'styled-components';


const StyledHome = styled.section`
  background-color: red;
`;
/*eslint-enable no-unused-vars*/

class Home extends Component {
  render() {
    return (
      <StyledHome className='Home'>
        <h1>Home</h1>
      </StyledHome>
    );
  }
}

export default Home;
