import axios from 'axios'

import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from '../actionTypes'

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
    type: FETCH_USERS_SUCCESS,
    payload: { users }
  }
}

function fetchUsersFail(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: { error }
  }
}
