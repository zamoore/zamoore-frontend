/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import LoadingSpinner from '../../components/loading-spinner';
/*eslint-enable no-unused-vars*/

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: null,
      error: null
    };
  }
  async componentDidMount() {
    let { articleId } = this.props.match.params;

    try {
      let response = await fetch(`http://localhost:8080/api/articles/${articleId}?include=author`);
      let article = await response.json();

      this.setState({ article });
    } catch(reason) {
      this.setState({ error: reason.message });
    }
  }
  render() {
    let content;

    if (!this.state.error) {
      if (this.state.article === null) {
        content = (<LoadingSpinner />);
      } else {
        let { title, body, author } = this.state.article;

        content = (
          <article>
            <h2>{title}</h2>
            <h3>Written by {author.username}</h3>
            <div>
              {body}
            </div>
          </article>
        );
      }
    } else {
      content = (<p>{this.state.error}</p>);
    }

    return (
      <section className="Article">
        {content}
      </section>
    );
  }
}

export default Article;
