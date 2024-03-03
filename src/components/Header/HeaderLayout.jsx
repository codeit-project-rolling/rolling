import Header from 'components/Header/HeaderComponents/Header';
import HeaderService from 'components/Header/HeaderComponents/HeaderService';
import styles from 'components/Header/HeaderLayout.module.scss';
// import userData from 'components/Header/mock.json';

function HeaderLayout() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerHideOnMobile}>
        <Header />
      </div>
      <HeaderService />
    </div>
  );
}
export default HeaderLayout;
