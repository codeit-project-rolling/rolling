import PropTypes from 'prop-types';

import styles from 'components/Badge/Badge.module.scss';

function Badge({ children }) {
  return <div className={styles.badge}>{children}뱃지</div>;
}

Badge.propTypes = {
  children: PropTypes.node,
};

Badge.defaultProps = {
  children: null,
};

export default Badge;
