import PropTypes from 'prop-types';

import styles from 'components/Badge/Badge.module.scss';

// relationship: [ ”친구” | “지인” | “동료” | “가족” ]
function Badge({ relationship }) {
  // relationship에 따라 뱃지 스타일 결정
  const handleBadgeStyleByRelationship = () => {
    let style;

    switch (relationship) {
      case '친구':
        style = styles.friend;
        break;
      case '지인':
        style = styles.other;
        break;
      case '동료':
        style = styles.coworker;
        break;
      case '가족':
        style = styles.family;
        break;
      default:
        style = '';
        break;
    }

    return style;
  };

  const badgeStyle = handleBadgeStyleByRelationship();

  // className
  const badgeClasses = `${styles.badge} ${badgeStyle}`;

  return <div className={badgeClasses}>{relationship}</div>;
}

Badge.propTypes = {
  relationship: PropTypes.string.isRequired,
};

export default Badge;
