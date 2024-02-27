import PropTypes from 'prop-types';

function BadgeElement({ children }) {
  return <div>{children}</div>;
}

BadgeElement.propTypes = {
  children: PropTypes.node,
};

BadgeElement.defaultProps = {
  children: null,
};

export default BadgeElement;
