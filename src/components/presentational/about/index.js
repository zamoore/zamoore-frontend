/*eslint-disable no-unused-vars*/
import React from 'react';
import styled from 'styled-components';

import utils from '../../../styles/utils';

const StyledAbout = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  padding: 50px 200px;
  z-index: 200;

  ${utils.triangle('left', 'light')}

  .card {
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    height: 500px;
    padding: 20px;
    position: relative;
    z-index: 100;
  }
`;
/*eslint-enable no-unused-vars*/

const About = (/* props */) => (
  <StyledAbout id='About' className='About'>
    <div className='card'>
      <p>hello</p>
    </div>
  </StyledAbout>
);

export default About;
