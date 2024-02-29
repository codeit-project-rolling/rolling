import PropTypes from 'prop-types';

import Check from 'assets/images/check.svg';

import styles from 'components/CheckButton/CheckButton.module.scss';

function CheckButton({ buttonState, onClick }) {
  let buttonClass;
  const handleClick = () => onClick();

  if (buttonState === 'enabled') {
    buttonClass = styles.checkButton;
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
      <img src={Check} alt="추가" />
    </div>
  );
}

CheckButton.propTypes = {
  buttonState: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

CheckButton.defaultProps = {
  buttonState: 'enabled',
};

export default CheckButton;
