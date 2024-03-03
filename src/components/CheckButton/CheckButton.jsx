import PropTypes from 'prop-types';

import Check from 'assets/images/check.svg';

import styles from 'components/CheckButton/CheckButton.module.scss';

function CheckButton({ buttonState }) {
  let buttonClass;

  if (buttonState === 'enabled') {
    buttonClass = styles.checkButton;
  }
  if (buttonState === 'disabled') {
    buttonClass = styles.disabled;
  }

  return (
    <div className={buttonClass} role="button" tabIndex={0}>
      <img src={Check} alt="추가" />
    </div>
  );
}

CheckButton.propTypes = {
  buttonState: PropTypes.string,
};

CheckButton.defaultProps = {
  buttonState: 'enabled',
};

export default CheckButton;
