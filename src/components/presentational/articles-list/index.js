/*eslint-disable no-unused-vars*/
import React from 'react';
import styled from 'styled-components';

import ArticleCard from '../article-card';

const StyledArticlesList = styled.section`
  .articles-list {
    border-left: 2px solid #29a2dd;
    list-style-type: none;
    padding: 20px 0 20px 40px;
  }
`;
/*eslint-enable no-unused-vars*/

const ArticlesList = (props) => (
  <StyledArticlesList className='ArticlesList'>
    <ul className='articles-list'>
      {props.articles.map((article) =>
        <ArticleCard
          title={article.title}
          preview={article.preview}
          category={article.category}
          id={article.id}
          key={article.id}
        />
      )}
    </ul>
  </StyledArticlesList>
);

export default ArticlesList;
