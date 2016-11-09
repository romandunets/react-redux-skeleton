import axios from 'axios';
import { browserHistory } from 'react-router';

import * as types from './actionTypes';
import authApi from '../api/AuthApi';

export function login(credentials) {
  return function(dispatch) {
    dispatch(loginRequest());
    /*return authApi.login(credentials)
      .then(function (response) {*/
        localStorage.setItem('token', 'TOKEN');//localStorage.setItem('token', response.data.token);
        dispatch(loginSuccess());
        browserHistory.replace('/');
    /*  })
      .catch(function (error) {
        dispatch(loginFailure(error));
      });*/
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
