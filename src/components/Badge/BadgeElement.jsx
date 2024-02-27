import PropTypes from 'prop-types';

import styles from 'components/Badge/BadgeElement.module.scss';

function BadgeElement({ colorClassName, children }) {
  const badgeElementContainerClasses = styles.badgeElementContainer;
  return <div className={`${badgeElementContainerClasses} ${colorClassName}`}>{children}뱃지</div>;
}

BadgeElement.propTypes = {
  colorClassName: PropTypes.string,
  children: PropTypes.node,
};

BadgeElement.defaultProps = {
  colorClassName: '',
  children: null,
};

export default BadgeElement;
