import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from 'components/BackgroundOption/BackColorOption.module.scss';
import CheckButton from 'components/CheckButton/CheckButton';

function BackColorOption({ onSelect }) {
  const [selectedColor, setSelectedColor] = useState('beige');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onSelect(color);
  };
  const colorList = {
    beige: 'beige',
    purple: 'purple',
    blue: 'blue',
    green: 'green',
  };

  return (
    <div className={styles.backgroundOption}>
      {Object.keys(colorList).map((color) => (
        <button
          key={color}
          className={`${styles.option} ${styles[color]}`}
          onClick={() => handleColorSelect(colorList[color])}
          type="button"
        >
          {selectedColor === colorList[color] && <CheckButton />}
        </button>
      ))}
    </div>
  );
}
BackColorOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
export default BackColorOption;
