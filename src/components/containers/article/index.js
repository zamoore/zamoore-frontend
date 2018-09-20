/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import showdown from 'showdown';
import sanitize from 'sanitize-html';
import _ from 'lodash';
import moment from 'moment';

// Redux
import store from '../../../store';
import { getArticleById, articleLoaded } from '../../../actions/articles';

// Styles
import { materialShadow } from '../../../styles/utils';

const converter = new showdown.Converter();

const StyledArticle = styled.section`
  margin-top: 50px;

  .article-header {
    border-bottom: 4px solid #E34153;
    margin-bottom: 20px;
  }
`;
/*eslint-enable no-unused-vars*/

class Article extends Component {
  render() {
    let body = converter.makeHtml(this.props.article.body);
    let sanitizedBody = sanitize(body);

    if (this.props.loading) {
      return (<h1>Loading...</h1>);
    } else {
      return (
        <div className='row'>
          <StyledArticle className='Article'>
            <header className='article-header'>
              <h2>{this.props.article.title}</h2>
              <p className='byline'>
                Written by {this.props.article.author && this.props.article.author.username}, <span className='byline-date'>{moment(this.props.article.createdAt).calendar()}</span>.
              </p>
            </header>
            <div dangerouslySetInnerHTML={{__html: sanitizedBody}} />
          </StyledArticle>
        </div>
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
