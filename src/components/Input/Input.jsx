import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from 'components/Input/Input.module.scss';

function Input({ className, placeholder, errorMsg: errormsg, onInputChange }) {
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');
  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
    onInputChange(inputText);
  };
  const isInputEmpty = inputText.trim() === '';
  const handleBlur = () => {
    if (isInputEmpty) {
      setError(errormsg);
    } else {
      setError('');
    }
  };
  return (
    <div>
      <input
        className={`${styles.inputContainer} ${className}`}
        value={inputText}
        onChange={handleInputTextChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {error && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};
Input.defaultProps = {
  className: '',
  placeholder: '',
  errorMsg: '',
};
export default Input;
