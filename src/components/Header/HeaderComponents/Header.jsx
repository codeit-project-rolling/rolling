import { Link, useNavigate } from 'react-router-dom';

import LogoImg from 'assets/images/Logo.png';

import Button from 'components/Button/Button';
import HeaderStyles from 'components/Header/HeaderComponents/Header.module.scss';

function Header() {
  const navigate = useNavigate();

  const handleRollingButtonClick = () => {
    navigate('/post');
  };
  return (
    <div className={HeaderStyles.headerContainer}>
      <div className={HeaderStyles.headerTop}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={HeaderStyles.headerLogo}>
            <img src={LogoImg} alt="LogoImg" />
            <p className={HeaderStyles.headerTitle}>Rolling</p>
          </div>
        </Link>
        <Button buttonType="outlined40" onClick={handleRollingButtonClick}>
          <p>롤링 페이퍼 만들기</p>
        </Button>
      </div>
      <hr className={HeaderStyles.line} />
    </div>
  );
}
export default Header;
