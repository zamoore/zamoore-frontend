/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Hero from '../../presentational/hero';
import ArticlesList from '../../presentational/articles-list';

import store from '../../../store';
import { getArticles } from '../../../actions';

const mapStateToProps = (state) => ({ articles: state.articles });

const StyledHome = styled.section`

`;
/*eslint-enable no-unused-vars*/

class Home extends Component {
  render() {
    return (
      <StyledHome className='Home'>
        <Hero />
        <ArticlesList articles={this.props.articles} />
      </StyledHome>
    );
  }
  componentDidMount() {
    store.dispatch(getArticles('http://localhost:8080/api/articles'));
  }
}

export default connect(mapStateToProps)(Home);
