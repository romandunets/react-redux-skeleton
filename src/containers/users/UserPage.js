import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../actions/userActions'
import UserCard from '../../components/users/UserCard'

class UserPage extends Component {
  componentWillMount() {
    this.props.actions.getUser(this.props.params.id);
  }

  render() {
    const { user } = this.props;
    return (
      <UserCard user={ user } />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
