import { queryArticles, findArticle } from '../api';

// Articles index
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

// Article show
export const articleErrored = (bool, error) => {
  return {
    type: 'ARTICLE_ERRORED',
    payload: { error: 'Something went wrong.' },
    error
  };
};
export const articleLoading = (bool) => {
  return {
    type: 'ARTICLE_LOADING',
    payload: { loading: bool }
  };
};
export const articleLoaded = (article) => {
  return {
    type: 'ARTICLE_LOADED',
    payload: { article }
  };
};
export const getArticleById = (articleId) => {
  return async (dispatch) => {
    dispatch(articleLoading(true));

    try {
      let { data: article } = await findArticle(articleId);

      dispatch(articleLoaded(article));
    } catch(reason) {
      dispatch(articleErrored(true, reason));
    }

    dispatch(articleLoading(false));
  };
};
