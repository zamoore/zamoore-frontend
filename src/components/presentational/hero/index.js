/*eslint-disable no-unused-vars*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHero = styled.section`

`;
/*eslint-enable no-unused-vars*/

const Hero = (/* props */) => (
  <StyledHero className='Hero'>
    <FontAwesomeIcon icon={faLaptop} size='6x' />
    <h2>Hello</h2>
  </StyledHero>
);

export default Hero;
