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
    case "FETCH_USERS_SUCCESS":
      return {...state, users: action.payload.users}
    case "FETCH_USERS_FAILED":
      return {...state, error: action.payload}
    default:
      return state;
  }
}

export default users
