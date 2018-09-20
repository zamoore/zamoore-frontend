/*eslint-disable no-unused-vars*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHero = styled.section`
  color: #444;
  margin-bottom: 50px;

  .hero-title {
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 0;
  }
  .hero-body {
    line-height: 1.75em;
  }
`;
/*eslint-enable no-unused-vars*/

const Hero = (/* props */) => (
  <StyledHero className='Hero row'>
    <h2 className='hero-title'>Hello, I'm Zack.</h2>
    <p className='hero-body'>I'm a software engineer currently working as a frontend developer. I believe in software development as a craft, and seek to produce code that not only works, but is elegant and easily maintainable.</p>
  </StyledHero>
);

export default Hero;
