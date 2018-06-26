/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';

import ArticleList from '../../components/article-list';
import LoadingSpinner from '../../components/loading-spinner';
/*eslint-enable no-unused-vars*/

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: null,
      error: null
    };
  }
  async componentDidMount() {
    try {
      let response = await fetch('http://localhost:8080/api/articles?include=author');
      let articles = await response.json();

      this.setState({ articles });
    } catch(reason) {
      this.setState({ error: reason.message });
    }
  }
  render() {
    let content;

    if (!this.state.error) {
      if (this.state.articles === null) {
        content = (<LoadingSpinner />);
      } else if (this.state.articles.length === 0) {
        content = (<p>No articles...</p>);
      } else {
        content = (<ArticleList articles={this.state.articles} />);
      }
    } else {
      content = (<p>{this.state.error}</p>);
    }

    return (
      <section className="Home">
        {content}
      </section>
    );
  }
}

export default Home;
