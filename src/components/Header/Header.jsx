import LogoImg from 'assets/images/Logo.png';

import HeaderStyles from 'components/Header/Header.module.scss';
import HeaderService from 'components/Header/HeaderService';

function Header() {
  return (
    <div className={HeaderStyles.headerContainer}>
      <div className={HeaderStyles.headerTop}>
        <div className={HeaderStyles.headerLogo}>
          <img src={LogoImg} alt="LogoImg" />
          <p className={HeaderStyles.headerTitle}>Rolling</p>
        </div>
        <button type="button" className={HeaderStyles.addRollingBtn}>
          롤링 페이퍼 만들기
        </button>
      </div>
      <div className="HeaderService-Conatainer">
        <HeaderService />
      </div>
    </div>
  );
}
export default Header;
