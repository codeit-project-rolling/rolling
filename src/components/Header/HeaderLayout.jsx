import Header from 'components/Header/HeaderComponents/Header';
// eslint-disable-next-line import/no-cycle
import HeaderService from 'components/Header/HeaderComponents/HeaderService';
import styles from 'components/Header/HeaderLayout.module.scss';

function HeaderLayout() {
  return (
    <div className={styles.headerContainer}>
      <Header />
      <HeaderService />
    </div>
  );
}
export default HeaderLayout;
