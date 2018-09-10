/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { row } from '../../../styles/utils';

const StyledHeader = styled.header`
  ${row}

  align-items: center;
  display: flex;
  margin-bottom: 20px;

  .branding {
    flex-grow: 1;

    a {
      color: #29a2dd;
    }
  }
  .primary-nav {
    align-items: center;
    display: flex;
  }
  .primary-nav-item {
    color: #29a2dd;
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
      <Link to='/'>zm</Link>
    </h1>
    <nav className='primary-nav'>
      <a href='https://github.com/zamoore' target='_blank' rel='noopener noreferrer' className='primary-nav-item'>
        <Icon icon={faGithub} size='lg' />
      </a>
      <a href='https://www.linkedin.com/in/zachary-moore-0a571b79/' target='_blank' rel='noopener noreferrer' className='primary-nav-item'>
        <Icon icon={faLinkedinIn} size='lg' />
      </a>
      <a href='mailto:zack.moore89@gmail.com' className='primary-nav-item'>
        <Icon icon={faEnvelope} size='lg' />
      </a>
    </nav>
  </StyledHeader>
);

export default Header;
