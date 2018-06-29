import jwt from 'jsonwebtoken';
import { REQUEST_SIGN_IN, HANDLE_SIGN_IN_SUCCESS, HANDLE_SIGN_IN_FAILURE, SIGN_OUT } from '../constants/action-types';

const initialState = () => ({
  authToken: localStorage.getItem('authToken'),
  name: undefined,
  role: undefined,
  isAuthenticated: !!localStorage.getItem('authToken'),
  isAuthenticating: false
});

export default (state = initialState(), action) => {
  switch(action.type) {
  case REQUEST_SIGN_IN:
    return {
      ...state,
      isAuthenticating: true
    };
  case HANDLE_SIGN_IN_SUCCESS: {
    let { username: name, role } = jwt.decode(action.payload.token);

    return {
      ...state,
      authToken: action.payload.token,
      isAuthenticated: true,
      isAuthenticating: false,
      name,
      role
    };
  }
  case HANDLE_SIGN_IN_FAILURE:
    return {
      ...state,
      isAuthenticating: false
    };
  case SIGN_OUT:
    return {
      ...state,
      authToken: undefined,
      isAuthenticated: false,
      name: undefined,
      role: undefined
    };
  default:
    return state;
  }
};
