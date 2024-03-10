import PropTypes from 'prop-types';

import RightButton from 'assets/images/arrow_right.svg';

import styles from 'components/ArrowButton/ArrowButton.module.scss';

function RightArrowButton({ onClick }) {
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
      <img className={styles.arrowButtonImg} src={RightButton} alt="오른쪽화살표" />
    </div>
  );
}

RightArrowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RightArrowButton;
