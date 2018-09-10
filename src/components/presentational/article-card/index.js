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
  <Link to={`/articles/${props.id}`}>
    <StyledArticleCard className='ArticleCard'>
      <h2>{props.title}</h2>
      <p>{props.category}</p>
      <p>{props.preview}</p>
    </StyledArticleCard>
  </Link>
);

export default ArticleCard;
