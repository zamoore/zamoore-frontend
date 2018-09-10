import { queryArticles, findArticle } from '../api';

export const articlesErrored = (bool, error) => {
  return {
    type: 'ARTICLES_ERRORED',
    payload: { error: 'Something went wrong.' },
    error
  };
};

export const articlesLoading = (bool) => {
  return {
    type: 'ARTICLES_LOADING',
    payload: { loading: bool }
  };
};

export const articlesLoaded = (articles) => {
  return {
    type: 'ARTICLES_LOADED',
    payload: { articles }
  };
};

export const getArticles = () => {
  return async (dispatch) => {
    dispatch(articlesLoading(true));

    try {
      let { data: articles } = await queryArticles();

      dispatch(articlesLoaded(articles));
    } catch(reason) {
      dispatch(articlesErrored(true, reason));
    }

    dispatch(articlesLoading(false));
  };
};

export const getArticleById = () => {
  return async (dispatch) => {
    dispatch(articlesLoading(true));

    try {
      let { data: articles } = await queryArticles();

      dispatch(articlesLoaded(articles));
    } catch(reason) {
      dispatch(articlesErrored(true, reason));
    }

    dispatch(articlesLoading(false));
  };
};
