/* global process */

import axios from 'axios';

const envToBaseUrlMap = {
  production: 'https://zamoore-api.herokuapp.com/api',
  development: 'http://localhost:8080/api'
};

const baseUrl = envToBaseUrlMap[process.env.NODE_ENV];

export const queryArticles = (params = {}) => {
  return axios.get(`${baseUrl}/articles?include=author`, params);
};

export const findArticle = (articleId, params = {}) => {
  return axios.get(`${baseUrl}/articles/${articleId}?include=author`, params);
};
