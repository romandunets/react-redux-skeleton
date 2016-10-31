import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/App';
import UsersList from './components/users/UsersList';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRedirect to="/users" />
      <Route path="users" component={UsersList} />
    </Route>
  )
};
