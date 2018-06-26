/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/*eslint-enable no-unused-vars*/

class ArticleList extends Component {
  render() {
    return (
      <ul className="ArticleList">
        {this.props.articles.map((article) => {
          return <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>;
        })}
      </ul>
    );
  }
}

ArticleList.defaultProps = {
  articles: []
};

export default ArticleList;
