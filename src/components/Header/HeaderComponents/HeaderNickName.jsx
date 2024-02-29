import PropTypes from 'prop-types';

import styles from 'components/Header/HeaderComponents/HeaderNickName.module.scss';

function HeaderNickName({ userData }) {
  return (
    <div>
      <p className={styles.toNickName}>To. {userData.name}</p>
    </div>
  );
}

HeaderNickName.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeaderNickName;
