import PropTypes from 'prop-types';

import Header from 'components/Header/HeaderComponents/Header';
// eslint-disable-next-line import/no-cycle
import HeaderService from 'components/Header/HeaderComponents/HeaderService';
import styles from 'components/Header/HeaderLayout.module.scss';

function HeaderLayout({ postId }) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerHideOnMobile}>
        <Header postId={postId} />
      </div>
      <HeaderService postId={postId} />
    </div>
  );
}
HeaderLayout.propTypes = {
  postId: PropTypes.string.isRequired,
};
export default HeaderLayout;
