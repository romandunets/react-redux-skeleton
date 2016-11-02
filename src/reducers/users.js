import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../actions/actionTypes';

const user = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const users = (state = {
    users: [],
    error: ''
  }, action) => {
  switch(action.type) {
    case FETCH_USERS_SUCCESS:
      return {...state, users: action.payload.users}
    case FETCH_USERS_FAILURE:
      return {...state, error: action.payload}
    default:
      return state;
  }
}

export default users;
