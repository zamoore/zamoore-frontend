/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Presentational components
import Hero from '../../presentational/hero';
import ArticlesList from '../../presentational/articles-list';

// Redux
import store from '../../../store';
import { getArticles } from '../../../actions/articles';

const StyledHome = styled.section`

`;
/*eslint-enable no-unused-vars*/

class Home extends Component {
  render() {
    let { articles } = this.props;

    return (
      <StyledHome className='Home row'>
        <Hero />
        {articles.length > 0 ? (
          <ArticlesList articles={this.props.articles} />
        ) : (
          <p>No articles.</p>
        )}
      </StyledHome>
    );
  }
  componentDidMount() {
    store.dispatch(getArticles());
  }
}

const mapStateToProps = (state) => ({ articles: state.articles.articles });

export default connect(mapStateToProps)(Home);
