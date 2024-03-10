import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoImg from 'assets/images/logo.svg';

import Button from 'components/Button/Button';
import HeaderStyles from 'components/Header/HeaderComponents/Header.module.scss';

function Header({ postId }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRollingButtonClick = () => {
    navigate('/post');
  };

  const id = postId;
  const buttonClasses = classNames(
    HeaderStyles.button,
    location.pathname === `/post/${id}` && HeaderStyles.visibilityHidden
  );

  return (
    <div style={{ position: `relative` }}>
      <div className={HeaderStyles.headerContainer}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className={HeaderStyles.headerLogo}>
            <img src={LogoImg} alt="LogoImg" />
            <p className={HeaderStyles.headerTitle}>Rolling</p>
          </div>
        </Link>

        <Button className={buttonClasses} buttonType="outlined40" onClick={handleRollingButtonClick}>
          <p>롤링 페이퍼 만들기</p>
        </Button>
      </div>
      <hr className={HeaderStyles.line} />
    </div>
  );
}
Header.propTypes = {
  postId: PropTypes.string,
};
Header.defaultProps = {
  postId: null, // postId의 기본값 설정
};
export default Header;
