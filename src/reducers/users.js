import * as types from '../actions/actionTypes';

const usersReducer = (state = {
    users: [],
    error: ''
  }, action) => {
  switch(action.type) {
    case types.LIST_USERS_REQUEST:
      return {...state, users: []}
    case types.LIST_USERS_SUCCESS:
      return {...state, users: action.payload.users}
    case types.LIST_USERS_FAILURE:
      return {...state, error: action.payload}
    default:
      return state;
  }
}

export default usersReducer;
