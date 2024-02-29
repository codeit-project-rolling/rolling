import classNames from 'classnames';
import PropTypes, { string } from 'prop-types';

import styles from 'components/Button/Button.module.scss';

function Practice({ buttonType, children, disabled, onClick }) {
  const buttonClassName = classNames({
    [styles.primaryButton56]: buttonType === 'primary56',
    [styles.primaryButton40]: buttonType === 'primary40',
    [styles.secondaryButton40]: buttonType === 'secondary40',
    [styles.outlinedButton56]: buttonType === 'outlined56',
    [styles.outlinedButton40]: buttonType === 'outlined40' && children.length !== 2,
    [styles.outlinedSmileButton40]: buttonType === 'outlined40' && children.length === 2,
    [styles.outlinedButton36]: buttonType === 'outlined36' && typeof children[0] !== 'string' && children.length !== 2,
    [styles.outlinedSmileButton36]: buttonType === 'outlined36' && children.length === 2,
    [styles.outlinedButton28]: buttonType === 'outlined28' && typeof children[0] !== 'string' && children.length !== 2,
    [styles.outlinedSmileButton28]: buttonType === 'outlined28' && children.length === 2,
    [styles.outlinedSingleButton36]:
      buttonType === 'outlined36' && typeof children[0] !== 'string' && children.length !== 2,
    [styles.outlinedSingleButton28]: buttonType === 'outlined28' && children[0] !== string && children.length !== 2,
    [styles.disabled]: disabled,
  });

  const handleClick = () => onClick();

  return (
    <button type="button" className={buttonClassName} onClick={handleClick}>
      <div>{children}</div>
    </button>
  );
}

Practice.propTypes = {
  children: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Practice.defaultProps = {
  children: '',
  buttonType: '',
  disabled: false,
};

export default Practice;
