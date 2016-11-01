import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './containers/App';
import UsersListPage from './containers/users/UsersListPage';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRedirect to="/users" />
      <Route path="users" component={UsersListPage} />
    </Route>
  )
};
