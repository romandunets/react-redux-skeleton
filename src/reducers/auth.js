import * as types from '../actions/actionTypes';
import initialState from './initialState';

function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case types.LOGIN_REQUEST:
      return {...state, message: '', isAuthenticated: false}
    case types.LOGIN_SUCCESS:
      return {...state, message: '', isAuthenticated: true}
    case types.LOGIN_FAILURE:
      return {...state, message: action.payload, isAuthenticated: false}
    default:
      return state;
  }
}

export default authReducer;
