import PropTypes from 'prop-types';

import styles from './PlusButton.module.scss';
import Plus from '../../assets/images/plus.png';

function PlusButton({ buttonState }) {
  let buttonClass;

  if (buttonState === 'enabled') {
    buttonClass = styles.plusButton;
  }
  if (buttonState === 'disabled') {
    buttonClass = styles.disabled;
  }

  return (
    <div className={buttonClass}>
      <img src={Plus} alt="추가" />
    </div>
  );
}

PlusButton.propTypes = {
  buttonState: PropTypes.string,
};

PlusButton.defaultProps = {
  buttonState: 'enabled',
};

export default PlusButton;
