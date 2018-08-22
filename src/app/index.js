/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import theme from './theme';

import Home from '../components/containers/home';
import Blog from '../components/containers/blog';
import Article from '../components/containers/article';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
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
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/article' component={Article} />
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
