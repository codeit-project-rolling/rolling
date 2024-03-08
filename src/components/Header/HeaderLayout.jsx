import PropTypes from 'prop-types';

import Header from 'components/Header/HeaderComponents/Header';
// eslint-disable-next-line import/no-cycle
import HeaderService from 'components/Header/HeaderComponents/HeaderService';
import styles from 'components/Header/HeaderLayout.module.scss';

function HeaderLayout({ postId, displayService }) {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={displayService && styles.headerHideOnMobile}>
          <Header postId={postId} />
          <div className={styles.dummyHeader} />
        </div>
        {postId && displayService && (
          <div>
            <HeaderService postId={postId} />
            <div className={styles.dummyHeaderService} />
          </div>
        )}
      </div>
      {displayService ? <div className={styles.dummyService} /> : <div className={styles.dummy} />}
    </>
  );
}
HeaderLayout.propTypes = {
  postId: PropTypes.string,
  displayService: PropTypes.bool,
};

HeaderLayout.defaultProps = {
  postId: '',
  displayService: false,
};

export default HeaderLayout;
