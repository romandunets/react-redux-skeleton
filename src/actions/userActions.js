import axios from 'axios'

import * as types from '../actions/actionTypes';
import userApi from '../api/UserApi';

export function listUsers() {
  return function(dispatch) {
    dispatch(listUsersRequest());
    userApi.listUsers()
      .then(function (response) {
        dispatch(listUsersSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(listUsersFailure(error));
      });
  }
}

function listUsersRequest() {
  return { type: types.LIST_USERS_REQUEST }
}

function listUsersSuccess(users) {
  return {
    type: types.LIST_USERS_SUCCESS,
    payload: { users }
  }
}

function listUsersFailure(error) {
  return {
    type: types.LIST_USERS_FAILURE,
    payload: { error }
  }
}
