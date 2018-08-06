/*eslint-disable no-unused-vars*/
import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.header`
  background-color: orange;
`;
/*eslint-enable no-unused-vars*/

const Contact = (/* props */) => (
  <StyledContact id='Contact' className='Contact'>
    <h1>Contact</h1>
  </StyledContact>
);

export default Contact;
