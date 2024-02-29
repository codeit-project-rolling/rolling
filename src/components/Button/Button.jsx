import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from 'components/Button/Button.module.scss';

function Button({ buttonType, children, disabled, onClick }) {
  const buttonClassName = classNames({
    [styles.primaryButton56]: buttonType === 'primary56',
    [styles.primaryButton40]: buttonType === 'primary40',
    [styles.secondaryButton40]: buttonType === 'secondary40',
    [styles.outlinedButton56]: buttonType === 'outlined56',
    [styles.outlinedButton40]: buttonType === 'outlined40' && React.Children.count(children) === 1,
    [styles.outlinedSmileButton40]: buttonType === 'outlined40' && React.Children.count(children) > 1,
    [styles.outlinedButton36]:
      buttonType === 'outlined36' && typeof children[0] !== 'string' && React.Children.count(children) === 1,
    [styles.outlinedSmileButton36]: buttonType === 'outlined36' && React.Children.count(children) > 1,
    [styles.outlinedButton28]:
      buttonType === 'outlined28' && typeof children[0] !== 'string' && React.Children.count(children) === 1,
    [styles.outlinedSmileButton28]: buttonType === 'outlined28' && React.Children.count(children) > 1,
    [styles.outlinedSingleButton36]:
      buttonType === 'outlined36' && typeof children.type !== 'string' && React.Children.count(children) === 1,
    [styles.outlinedSingleButton28]:
      buttonType === 'outlined28' && typeof children.type !== 'string' && React.Children.count(children) === 1,
    [styles.disabled]: disabled,
  });
  console.log(typeof children.type);
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button type="button" className={buttonClassName} onClick={handleClick}>
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
