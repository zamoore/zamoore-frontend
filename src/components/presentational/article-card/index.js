/*eslint-disable no-unused-vars*/
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

import { materialShadow } from '../../../styles/utils';

const StyledArticleCard = styled.li`
  ${materialShadow(1)}

  background-color: #fff;
  border-radius: 8px;
  border-top: 6px solid #E34153;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  transition: all .3s;

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

  &:hover {
    ${materialShadow(2)}

    &:before {
      background-color: #E34153;
    }
  }

  .header {
    display: flex;
    margin-bottom: 20px;

    .title-container {
      flex-grow: 1;
    }
    .title {
      font-weight: 500;
      margin: 0;
    }
    .byline {
      color: #8e8e8e;
      font-weight: 300;
      font-size: 14px;
      margin-bottom: 0;
      margin-top: 5px;
    }
    .byline-date {
      text-transform: lowercase;
    }
    svg {
      color: #E34153;
    }
  }
`;

const categoryToIconMap = {
  js: faJsSquare
};
/*eslint-enable no-unused-vars*/

const ArticleCard = (props) => (
  <Link to={{
    pathname: `/articles/${props.article.id}`,
    state: {
      article: props.article
    }
  }}>
    <StyledArticleCard className='ArticleCard'>
      <header className='header'>
        <div className='title-container'>
          <h2 className='title'>{props.article.title}</h2>
          <p className='byline'>
            Written by {props.article.author.username}, <span className='byline-date'>{moment(props.article.createdAt).calendar()}</span>.
          </p>
        </div>
        <Icon icon={categoryToIconMap[props.article.category]} size='lg' />
      </header>
      <p>{props.article.preview}</p>
    </StyledArticleCard>
  </Link>
);

export default ArticleCard;
