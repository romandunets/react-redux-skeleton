import axios from 'axios'

import * as types from '../actions/actionTypes';

export function fetchUsers() {
  return function(dispatch) {
    axios.get('http://0.0.0.0:9000/users')
      .then(function (response) {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch(function (error) {
        dispatch(fetchUsersFail(error));
      });
  }
}

function fetchUsersSuccess(users) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: { users }
  }
}

function fetchUsersFail(error) {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: { error }
  }
}
