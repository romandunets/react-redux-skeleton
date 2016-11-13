import React, { PropTypes } from 'react';

const UserCard = ({ user }) => {
  return (
     <dl>
       <dt>Username</dt>
       <dd>{ user.username }</dd>
     </dl>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired
}

export default UserCard;
