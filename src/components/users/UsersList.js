import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import UsersListItem from './UsersListItem'

const UsersList = ({ users }) => {
  return (
    <ul>{ users.map (user => <UsersListItem key={user.id} user={user} />) }</ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default UsersList;
