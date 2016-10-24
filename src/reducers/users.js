const user = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const users = (state = { users: [] }, action) => {
	console.log(action.type)
  switch(action.type) {
    case "FETCH_USERS":
      return {...state, users: action.payload}
    default:
      return state;
  }
}

export default users
