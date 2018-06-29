import { combineReducers } from 'redux';

import articles from './articles.js';
import currentUser from './current-user.js';

export default combineReducers({ articles, currentUser });
