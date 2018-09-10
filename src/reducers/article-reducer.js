import initialState from '../initial-state';

const articleReducer = (state = initialState.article, action) => {
  switch(action.type) {
  case 'ARTICLE_LOADING':
    return Object.assign({}, state, {
      loading: action.payload.loading
    });
  case 'ARTICLE_LOADED':
    return Object.assign({}, state, {
      article: action.payload.article
    });
  default:
    return state;
  }
};

export default articleReducer;
