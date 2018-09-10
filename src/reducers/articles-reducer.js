import initialState from '../initial-state';

const articlesReducer = (state = initialState.articles, action) => {
  switch(action.type) {
  case 'ARTICLES_LOADED':
    return Object.assign({}, state, {
      articles: action.payload.articles
    });
  default:
    return state;
  }
};

export default articlesReducer;
