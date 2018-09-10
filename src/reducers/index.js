import { combineReducers } from 'redux';
import article from './article-reducer';
import articles from './articles-reducer';

const rootReducer = combineReducers({ article, articles });

export default rootReducer;
