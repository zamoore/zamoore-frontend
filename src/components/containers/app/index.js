/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import theme from './theme';

// Containers
import Home from '../home';
import Blog from '../blog';
import Article from '../article';

// Presentational
import Header from '../../presentational/header';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

  body {
    background-color: #fbfbfb;

    &:before {
      content: "";
      background-image: url('graph-paper.svg');
      opacity: 0.035;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -100;
    }
  }

  a {
    color: #444;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }
`;

const StyledApp = styled.section`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
`;
/*eslint-enable no-unused-vars*/

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/article' component={Article} />
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
