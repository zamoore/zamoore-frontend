/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import showdown from 'showdown';
import sanitize from 'sanitize-html';
import _ from 'lodash';

// Redux
import store from '../../../store';
import { getArticleById, articleLoaded } from '../../../actions/articles';

// Style utils
import { row } from '../../../styles/utils';

const converter = new showdown.Converter();

const StyledArticle = styled.section`
  ${row}
`;
/*eslint-enable no-unused-vars*/

class Article extends Component {
  render() {
    let body = converter.makeHtml(this.props.article.body);
    let sanitizedBody = sanitize(body);

    if (this.props.loading && this.props.article) {
      return (<h1>Loading...</h1>);
    } else {
      return (
        <StyledArticle className='Article'>
          <h1>{this.props.article.title}</h1>
          <div dangerouslySetInnerHTML={{__html: sanitizedBody}} />
        </StyledArticle>
      );
    }
  }
  componentDidMount() {
    const article = _.get(this, 'props.location.state.article');
    const articleId = _.get(this, 'props.match.params.articleId');

    if (article) {
      store.dispatch(articleLoaded(article));
    } else {
      store.dispatch(getArticleById(articleId));
    }
  }
}

const mapStateToProps = (state) => ({ article: state.article.article, loading: state.article.loading });

export default connect(mapStateToProps)(Article);
