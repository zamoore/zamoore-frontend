/*eslint-disable no-unused-vars*/
import React from 'react';
import styled from 'styled-components';

import ArticleCard from '../article-card';

import { row } from '../../../styles/utils';

const StyledArticlesList = styled.section`
  ${row}

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
        <ArticleCard name={article.name} />
      )}
    </ul>
  </StyledArticlesList>
);

export default ArticlesList;
