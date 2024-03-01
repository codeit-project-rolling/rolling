import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from 'components/BackgroundOption/BackgroundOption.module.scss';
import CheckButton from 'components/CheckButton/CheckButton';

function BackgroundOption({ onSelect }) {
  const [selectedColor, setSelectedColor] = useState('beige');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onSelect(color);
  };

  return (
    <div className={styles.backgroundOption}>
      <button className={`${styles.option} ${styles.beige}`} onClick={() => handleColorSelect('beige')} type="button">
        {selectedColor === 'beige' && <CheckButton />}
      </button>
      <button className={`${styles.option} ${styles.purple}`} onClick={() => handleColorSelect('purple')} type="button">
        {selectedColor === 'purple' && <CheckButton />}
      </button>
      <button className={`${styles.option} ${styles.blue}`} onClick={() => handleColorSelect('blue')} type="button">
        {selectedColor === 'blue' && <CheckButton />}
      </button>
      <button className={`${styles.option}  ${styles.green}`} onClick={() => handleColorSelect('green')} type="button">
        {selectedColor === 'green' && <CheckButton />}
      </button>
    </div>
  );
}
BackgroundOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
export default BackgroundOption;
