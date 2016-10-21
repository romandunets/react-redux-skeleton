import React, { propTypes } from 'react';

const User = ({ username }) => {
  <li>{username}</li>
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired
}

export default User
