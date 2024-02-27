import PropTypes from 'prop-types';

import styles from 'components/Badge/BadgeElement.module.scss';

function BadgeElement({ children }) {
  const badgeElementContainerClasses = styles.badgeElementContainer;
  return <div className={badgeElementContainerClasses}>{children}뱃지</div>;
}

BadgeElement.propTypes = {
  children: PropTypes.node,
};

BadgeElement.defaultProps = {
  children: null,
};

export default BadgeElement;
