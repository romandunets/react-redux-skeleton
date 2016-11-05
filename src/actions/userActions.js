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

export function getUser(id) {
  return function(dispatch) {
    dispatch(getUserRequest());
    userApi.getUser(id)
      .then(function (response) {
        dispatch(getUserSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(getUserFailure(error));
      });
  }
}

function getUserRequest() {
  return { type: types.GET_USER_REQUEST }
}

function getUserSuccess(user) {
  return {
    type: types.GET_USER_SUCCESS,
    payload: { user }
  }
}

function getUserFailure(error) {
  return {
    type: types.GET_USER_FAILURE,
    payload: { error }
  }
}
