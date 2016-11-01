import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import User from './User'

const UsersList = ({ users }) => {
  return (
    <ul>{ users.map (user => <User key={user.id} {...user} />) }</ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsersList;
