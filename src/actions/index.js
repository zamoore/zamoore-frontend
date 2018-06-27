import axios from 'axios';
import { REQUEST_SIGN_IN, HANDLE_SIGN_IN_SUCCESS, HANDLE_SIGN_IN_FAILURE, SIGN_OUT } from '../constants/action-types';

// Sign in
export function requestSignIn() {
  return { type: REQUEST_SIGN_IN };
}
export function handleSignInSuccess(token) {
  return {
    type: HANDLE_SIGN_IN_SUCCESS,
    payload: { token }
  };
}
export function handleSignInFailure(message) {
  return {
    type: HANDLE_SIGN_IN_FAILURE,
    payload: { message }
  };
}
export function signOut() {
  return {
    type: SIGN_OUT
  };
}

// Async actions
export function signIn(credentials) {
  return function(dispatch) {
    dispatch(requestSignIn());

    return axios.post('http://localhost:8080/api/auth', {
      email: credentials.email,
      password: credentials.password
    })
      .then(
        (resp) => dispatch(handleSignInSuccess(resp.data)),
        (error) => dispatch(handleSignInFailure(error))
      );
  };
}
