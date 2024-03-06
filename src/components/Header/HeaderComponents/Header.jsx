import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import LogoImg from 'assets/images/Logo.png';

import Button from 'components/Button/Button';
import HeaderStyles from 'components/Header/HeaderComponents/Header.module.scss';

function Header({ postId }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleRollingButtonClick = () => {
    navigate('/post');
  };
  const id = postId;
  return (
    <>
      <div className={HeaderStyles.headerContainer}>
        <div className={HeaderStyles.headerTop}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className={HeaderStyles.headerLogo}>
              <img src={LogoImg} alt="LogoImg" />
              <p className={HeaderStyles.headerTitle}>Rolling</p>
            </div>
          </Link>
          {location.pathname !== `/post/${id}` &&
            location.pathname !== `/post/${id}/edit` && ( // 현재 경로가 '/post/:id'가 아닐 때에만 렌더링
              <Button buttonType="outlined40" onClick={handleRollingButtonClick}>
                <p>롤링 페이퍼 만들기</p>
              </Button>
            )}
        </div>
      </div>
      <hr className={HeaderStyles.line} />
    </>
  );
}
Header.propTypes = {
  postId: PropTypes.string,
};
Header.defaultProps = {
  postId: null, // postId의 기본값 설정
};
export default Header;
