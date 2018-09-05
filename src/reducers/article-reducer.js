import initialState from '../initial-state';

const articleReducer = (state = initialState.articles, action) => {
  switch(action.type) {
  case 'ARTICLES_LOADED':
    return action.payload.articles;
  default:
    return state;
  }
};

export default articleReducer;
