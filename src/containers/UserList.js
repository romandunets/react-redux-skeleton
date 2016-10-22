import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import User from './User'

const UserList = ({ users }) => (
  <ul>
    { users.map (user => <User key={user.id} {...user} />) }
  </ul>
)

const mapUsersToProps = () => ({
  users: [
    { id: 1, username: "testuser1" },
    { id: 2, username: "testuser2" },
    { id: 3, username: "testuser3" }
  ]
})

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const s = connect(mapUsersToProps)(UserList)

export default s
