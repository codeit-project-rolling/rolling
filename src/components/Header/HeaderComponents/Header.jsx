import LogoImg from 'assets/images/Logo.png';

import Button from 'components/Button/Button';
import HeaderStyles from 'components/Header/HeaderComponents/Header.module.scss';

function Header() {
  const handleClick = () => {
    console.log(1);
  };
  return (
    <>
      <div className={HeaderStyles.headerContainer}>
        <div className={HeaderStyles.headerTop}>
          <div className={HeaderStyles.headerLogo}>
            <img src={LogoImg} alt="LogoImg" />
            <p className={HeaderStyles.headerTitle}>Rolling</p>
          </div>
          <Button buttonType="outlined40" onClick={handleClick}>
            <p>롤링 페이퍼 만들기</p>
          </Button>
        </div>
      </div>
      <hr className={HeaderStyles.line} />
    </>
  );
}
export default Header;
