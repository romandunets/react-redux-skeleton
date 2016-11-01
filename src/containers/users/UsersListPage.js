import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../actions'
import UsersList from '../../components/users/UsersList'

class UsersListPage extends Component {
  componentWillMount() {
    this.props.actions.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <UsersList users={ users } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
