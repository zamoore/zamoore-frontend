import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import watch from 'redux-watch';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
const watchAuthToken = watch(store.getState, 'currentUser.authToken');

store.subscribe(watchAuthToken((newVal) => {
  if (newVal) {
    localStorage.setItem('authToken', newVal);
  } else {
    localStorage.removeItem('authToken');
  }
}));

window.store = store;

export default store;
