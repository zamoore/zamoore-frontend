import axios from 'axios';

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

export const getArticles = (url) => {
  return async (dispatch) => {
    let response;

    dispatch(articlesLoading(true));

    try {
      response = await axios.get(url);

      dispatch(articlesLoaded(response.data));
    } catch(reason) {
      dispatch(articlesErrored(true, reason));
    }

    dispatch(articlesLoading(false));
  };
};
