import PropTypes from 'prop-types';

import styles from './TrashButton.module.scss';
import TrashImg from '../../assets/images/deleted';

function TrashButton({ buttonState }) {
  let buttonClass;
  let color;

  if (buttonState === 'enabled') {
    buttonClass = styles.trashButton;
    color = '#555555';
  }
  if (buttonState === 'disabled') {
    buttonClass = styles.disabled;
    color = 'white';
  }

  return (
    <div className={buttonClass}>
      <TrashImg color={color} />
    </div>
  );
}

TrashButton.propTypes = {
  buttonState: PropTypes.string,
};

TrashButton.defaultProps = {
  buttonState: 'enabled',
};

export default TrashButton;
