import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import users from './users';

const reducer = combineReducers({
  users,
  form: formReducer
});

export default reducer;
