/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticleCard = styled.li`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-bottom: 20px;
  padding: 20px;
  position: relative;

  &:before {
    content: "";
    height: 10px;
    width: 10px;
    background-color: #29a2dd;
    border-radius: 50%;
    position: absolute;
    left: -46px;
    top: calc(50% - 6px);
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
/*eslint-enable no-unused-vars*/

const ArticleCard = (props) => (
  <Link to={{
    pathname: `/articles/${props.article.id}`,
    state: {
      article: props.article
    }
  }}>
    <StyledArticleCard className='ArticleCard'>
      <h2>{props.article.title}</h2>
      <p>{props.article.category}</p>
      <p>{props.article.preview}</p>
    </StyledArticleCard>
  </Link>
);

export default ArticleCard;
