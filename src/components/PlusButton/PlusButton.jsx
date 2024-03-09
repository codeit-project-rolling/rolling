import PropTypes from 'prop-types';

import Plus from 'assets/images/plus.png';

import styles from 'components/PlusButton/PlusButton.module.scss';

function PlusButton({ buttonState, onClick }) {
  let buttonClass;
  const handleClick = () => onClick();

  if (buttonState === 'enabled') {
    buttonClass = styles.plusButton;
  }
  if (buttonState === 'disabled') {
    buttonClass = styles.disabled;
  }

  return (
    <div
      className={buttonClass}
      role="button"
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <img src={Plus} alt="추가" />
    </div>
  );
}

PlusButton.propTypes = {
  buttonState: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

PlusButton.defaultProps = {
  buttonState: 'enabled',
};

export default PlusButton;
