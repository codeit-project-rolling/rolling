import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from 'components/Input/InputText.module.scss';

function InputText({ className, placeholder, errormsg, inputvalue, onInputChange }) {
  const [error, setError] = useState('');
  const handleBlur = () => {
    if (!inputvalue) {
      setError(errormsg);
    } else {
      setError('');
    }
  };
  return (
    <div>
      <input
        className={`${styles.inputContainer} ${className} ${error ? styles.error : ''} ${inputvalue ? styles.isInputValue : ''}`}
        value={inputvalue}
        onChange={onInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {error !== '' && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
}

InputText.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errormsg: PropTypes.string,
  inputvalue: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};
InputText.defaultProps = {
  className: '',
  placeholder: '',
  errormsg: '',
  inputvalue: '',
};
export default InputText;
