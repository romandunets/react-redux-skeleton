import * as types from '../actions/actionTypes';

const users = (state = {
    users: [],
    error: ''
  }, action) => {
  switch(action.type) {
    case types.FETCH_USERS_SUCCESS:
      return {...state, users: action.payload.users}
    case types.FETCH_USERS_FAILURE:
      return {...state, error: action.payload}
    default:
      return state;
  }
}

export default users;
