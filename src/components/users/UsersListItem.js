import React, { PropTypes } from 'react';
import { Link } from 'react-router'

const UsersListItem = ({ user }) => (
  <li>
    <Link to={`/users/${user.id}`}>{user.username}</Link>
  </li>
)

UsersListItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
}

export default UsersListItem;
