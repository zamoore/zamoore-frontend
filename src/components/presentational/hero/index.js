/*eslint-disable no-unused-vars*/
import React from 'react';
import styled from 'styled-components';

import utils from '../../../styles/utils';

const StyledHero = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 400px;
  overflow: hidden;
  padding: 0 200px;
  position: relative;
  z-index: 100;

  ${utils.triangle('right', 'dark')}
`;
/*eslint-enable no-unused-vars*/

const Hero = (/* props */) => (
  <StyledHero className='Hero'>
  </StyledHero>
);

export default Hero;
