import LogoImg from 'assets/images/Logo.png';

import HeaderStyles from 'components/Header/HeaderComponents/Header.module.scss';

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
      <hr className={HeaderStyles.line} />
    </div>
  );
}
export default Header;
