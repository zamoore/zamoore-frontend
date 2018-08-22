/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { row } from '../../../styles/utils.js';

const StyledHeader = styled.header`
  ${row}

  align-items: center;

  .branding {
    flex-grow: 1;
  }
  .primary-nav {
    align-items: center;
    display: flex;
  }
  .primary-nav-item {
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
/*eslint-enable no-unused-vars*/

const Header = (/* props */) => (
  <StyledHeader className='Header'>
    <h1 className='branding'>
      <Link to='/'>THING</Link>
    </h1>
    <nav className='primary-nav'>
      <a href="" className='primary-nav-item'>
        <Icon icon={faGithubAlt} />
      </a>
      <a href="" className='primary-nav-item'>
        <Icon icon={faLinkedinIn} />
      </a>
      <a href="" className='primary-nav-item'>
        <Icon icon={faEnvelope} />
      </a>
    </nav>
  </StyledHeader>
);

export default Header;
