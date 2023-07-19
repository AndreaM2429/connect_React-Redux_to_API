import PropTypes from 'prop-types';

function LiUsers({ name, lastname }) {
  return (
    <li>
      User:
      <span>{name}</span>
      <span>{lastname}</span>
    </li>
  );
}

LiUsers.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};

export default LiUsers;
