import Header from 'components/Header/HeaderComponents/Header';
import HeaderNickName from 'components/Header/HeaderComponents/HeaderNickName';
import HeaderService from 'components/Header/HeaderComponents/HeaderService';
import styles from 'components/Header/HeaderLayout.module.scss';
import userData from 'components/Header/mock.json';

function HeaderLayout() {
  return (
    <div className={styles.headerContainer}>
      <Header />
      <div className={styles.headerServiceContainer}>
        <HeaderNickName userData={userData} />
        <HeaderService userData={userData} />
      </div>
    </div>
  );
}
export default HeaderLayout;
