import axios from 'axios';
import { browserHistory } from 'react-router';

import * as types from './actionTypes';
import authApi from '../api/AuthApi';

export function signup(credentials) {
  return function(dispatch) {
    dispatch(signupRequest());
    // Uncomment this to enable JWT authentication
    /*return authApi.signup(credentials)
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        dispatch(signupSuccess());
        browserHistory.replace('/');
      })
      .catch(function (error) {
        dispatch(signupFailure(error));
      });*/

    // Comment / delete this to enable JWT authentication
    localStorage.setItem('token', 'TOKEN');
    dispatch(signupSuccess());
    browserHistory.replace('/');
  }
}

function signupRequest() {
  return { type: types.SIGNUP_REQUEST }
}

function signupSuccess() {
  return { type: types.SIGNUP_SUCCESS }
}

function signupFailure(error) {
  return {
    type: types.SIGNUP_FAILURE,
    payload: error
  }
}

export function login(credentials) {
  return function(dispatch) {
    dispatch(loginRequest());
    // Uncomment this to enable JWT authentication
    /*return authApi.login(credentials)
      .then(function (response) {
        localStorage.setItem('token', response.data.token);
        dispatch(loginSuccess());
        browserHistory.replace('/');
      })
      .catch(function (error) {
        dispatch(loginFailure(error));
      });*/

    // Comment / delete this to enable JWT authentication
    localStorage.setItem('token', 'TOKEN');//localStorage.setItem('token', response.data.token);
    dispatch(loginSuccess());
    browserHistory.replace('/');
  }
}

function loginRequest() {
  return { type: types.LOGIN_REQUEST }
}

function loginSuccess() {
  return { type: types.LOGIN_SUCCESS }
}

function loginFailure(error) {
  return {
    type: types.LOGIN_FAILURE,
    payload: error
  }
}

export function logout() {
  return function(dispatch) {
    localStorage.removeItem('token');
    dispatch({ type: types.LOGOUT });
    browserHistory.replace('/login');
  }
}
