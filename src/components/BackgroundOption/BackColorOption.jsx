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
  const clolrList = {
    beige: 'beige',
    purple: 'purple',
    blue: 'blue',
    green: 'green',
  };

  return (
    <div className={styles.backgroundOption}>
      {Object.keys(clolrList).map((color) => (
        <button
          key={color}
          className={`${styles.option} ${styles[color]}`}
          onClick={() => handleColorSelect(clolrList[color])}
          type="button"
        >
          {selectedColor === clolrList[color] && <CheckButton />}
        </button>
      ))}
    </div>
  );
}
BackColorOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
export default BackColorOption;
