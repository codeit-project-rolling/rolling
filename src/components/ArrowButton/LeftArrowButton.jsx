import PropTypes from 'prop-types';

import Ellipse from 'assets/images/Ellipse 1.svg';
import LeftButton from 'assets/images/arrow_left.svg';

import styles from 'components/ArrowButton/ArrowButton.module.scss';

function LeftArrowButton({ onClick }) {
  const handleClick = () => onClick();

  return (
    <div
      className={styles.arrowButton}
      role="button"
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <img className={styles.arrowButtonBackground} src={Ellipse} alt="화살표 버튼 배경" />
      <img className={styles.arrowButtonImg} src={LeftButton} alt="왼쪽 화살표" />
    </div>
  );
}

LeftArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LeftArrowButton;
