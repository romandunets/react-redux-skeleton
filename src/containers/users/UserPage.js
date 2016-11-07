import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import UserCard from '../../components/users/UserCard';

class UserPage extends Component {
  componentWillMount() {
    this.props.actions.getUser(this.props.params.id);
  }

  render() {
    const { user, message } = this.props;
    return (
      <div>
        <h2>{ message }</h2>
        <Link to={`/users`}>Back</Link> | <Link to={`/users/${user.id}/edit`}>Edit</Link>
        <UserCard user={ user } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    message: state.users.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
