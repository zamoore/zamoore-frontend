/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import Typed from 'typed.js';

import utils from '../../../styles/utils';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  display: flex;
  padding: 25px 200px;
  overflow: hidden;
  position: sticky;
  top: 0px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 200;

  ${utils.triangle('left', 'light')}

  .branding {
    flex-grow: 1;
    font-weight: 500;
    margin: 0;
    position: relative;
    z-index: 100;
  }
  .typed-cursor {
    font-weight: 300;
  }

  .navigation {
    position: relative;
    z-index: 100;

    a {
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      font-weight: 500;
      margin-right: 20px;
      text-decoration: none;
      transition: color .3s;

      &:visited,
      &:active,
      &:focus {
        color: #fff;
      }
      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
/*eslint-enable no-unused-vars*/

class Header extends Component {
  componentDidMount() {
    new Typed('.first-name', {
      strings: ['ZACK', 'ZA'],
      smartBackspace: true,
      typeSpeed: 150,
      backSpeed: 150,
      onComplete() {
        setTimeout(() => {
          document.querySelector('.typed-cursor').style.display = 'none';
        }, 1000);
      }
    });
  }
  render() {
    return (
      <StyledHeader className='Header'>
        <h1 className='branding'>
          <span className='first-name'></span>
          <span className='last-name'>MOORE</span>
        </h1>

        <nav className='navigation'>
          <Link to='/blog'>BLOG</Link>
          <ScrollLink to='About' duration={500} smooth={true}>ABOUT</ScrollLink>
          <ScrollLink to='Contact' duration={500} smooth={true}>CONTACT</ScrollLink>
        </nav>
      </StyledHeader>
    );
  }
}

export default Header;
