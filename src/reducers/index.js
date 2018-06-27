import { REQUEST_SIGN_IN, HANDLE_SIGN_IN_SUCCESS, HANDLE_SIGN_IN_FAILURE, SIGN_OUT } from '../constants/action-types';

const initialState = {
  authToken: localStorage.getItem('authToken'),
  isAuthenticated: !!localStorage.getItem('authToken'),
  isAuthenticating: false
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
  case REQUEST_SIGN_IN:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticating: true
    };
  case HANDLE_SIGN_IN_SUCCESS:
    localStorage.setItem('authToken', action.payload.token);
    return {
      ...state,
      authToken: action.payload.token,
      isAuthenticated: true,
      isAuthenticating: false
    };
  case HANDLE_SIGN_IN_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      isAuthenticating: false
    };
  case SIGN_OUT:
    localStorage.removeItem('authToken');
    return {
      ...state,
      isAuthenticated: false
    };
  default:
    return state;
  }
};

export default rootReducer;
