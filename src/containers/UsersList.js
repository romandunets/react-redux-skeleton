import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import User from './User'

const UserList = ({ users }) => (
  <ul>
    { users.map (user => <User key={user.id} {...user} />) }
  </ul>
)

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
