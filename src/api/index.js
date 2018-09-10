/* global process */

import axios from 'axios';

let envToBaseUrlMap = {
  production: 'https://zamoore-api.herokuapp.com/api',
  development: 'http://localhost:8080/api'
};

export const queryArticles = (params = {}) => {
  return axios.get(`${envToBaseUrlMap[process.env.NODE_ENV]}/articles`, params);
};

export const findArticle = (articleId, params = {}) => {
  return axios.get(`${envToBaseUrlMap[process.env.NODE_ENV]}/articles/${articleId}`, params);
};
