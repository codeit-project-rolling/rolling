import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import styles from 'components/Button/Button.module.scss';

function Button({ buttonType, children, disabled, onClick }) {
  const buttonClassName = classNames({
    [styles.primaryButton56]: buttonType === 'primary56',
    [styles.primaryButton40]: buttonType === 'primary40',
    [styles.secondaryButton40]: buttonType === 'secondary40',
    [styles.outlinedButton56]: buttonType === 'outlined56',
    [styles.outlinedButton40]: buttonType === 'outlined40' && children.length === 'undefined',
    [styles.outlinedSmileButton40]: buttonType === 'outlined40' && children.length !== 'undefined',
    [styles.outlinedButton36]:
      buttonType === 'outlined36' && typeof children[0] !== 'string' && children.length === 'undefined',
    [styles.outlinedSmileButton36]: buttonType === 'outlined36' && children.length !== 'undefined',
    [styles.outlinedButton28]:
      buttonType === 'outlined28' && typeof children[0] !== 'string' && children.length === 'undefined',
    [styles.outlinedSmileButton28]: buttonType === 'outlined28' && children.length !== 'undefined',
    [styles.outlinedSingleButton36]:
      buttonType === 'outlined36' && typeof children !== 'string' && children.length === 'undefined',
    [styles.outlinedSingleButton28]:
      buttonType === 'outlined28' && typeof children !== 'string' && children.length === 'undefined',
    [styles.disabled]: disabled,
  });

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button type="button" className={buttonClassName} onClick={handleClick} ref={buttonRef}>
      <div className={styles.basicSet}>{children}</div>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: '',
  buttonType: '',
  disabled: false,
};

export default Button;
