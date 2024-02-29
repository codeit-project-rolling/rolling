import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from 'components/BackgroundOption/BackgroundOption.module.scss';
import CheckButton from 'components/CheckButton/CheckButton';

function BackgroundOption({ onSelect }) {
  const [selectedColor, setSelectedColor] = useState('orange');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onSelect(color);
  };

  return (
    <div className={styles.backgroundOption}>
      <button
        className={`${styles.option} ${styles.orange}`}
        onClick={() => handleColorSelect('orange')}
        // style={{ backgroundColor: '#FFE2AD' }}
        type="button"
      >
        {selectedColor === 'orange' && <CheckButton />}
      </button>
      <button
        className={`${styles.option} ${styles.purple}`}
        onClick={() => handleColorSelect('purple')}
        style={{ backgroundColor: '#ECD9FF' }}
        type="button"
      >
        {selectedColor === 'purple' && <CheckButton />}
      </button>
      <button
        className={`${styles.option} ${styles.blue}`}
        onClick={() => handleColorSelect('blue')}
        style={{ backgroundColor: '#B1E4FF' }}
        type="button"
      >
        {selectedColor === 'blue' && <CheckButton />}
      </button>
      <button
        className={`${styles.option}  ${styles.green}`}
        onClick={() => handleColorSelect('green')}
        style={{ backgroundColor: '#D0F5C3' }}
        type="button"
      >
        {selectedColor === 'green' && <CheckButton />}
      </button>
    </div>
  );
}
BackgroundOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
export default BackgroundOption;
