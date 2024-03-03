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
      <button
        className={`${styles.option} ${styles.beige}`}
        onClick={() => handleColorSelect(clolrList.beige)}
        type="button"
      >
        {selectedColor === clolrList.beige && <CheckButton />}
      </button>
      <button
        className={`${styles.option} ${styles.purple}`}
        onClick={() => handleColorSelect(clolrList.purple)}
        type="button"
      >
        {selectedColor === clolrList.purple && <CheckButton />}
      </button>
      <button
        className={`${styles.option} ${styles.blue}`}
        onClick={() => handleColorSelect(clolrList.blue)}
        type="button"
      >
        {selectedColor === clolrList.blue && <CheckButton />}
      </button>
      <button
        className={`${styles.option}  ${styles.green}`}
        onClick={() => handleColorSelect(clolrList.green)}
        type="button"
      >
        {selectedColor === clolrList.green && <CheckButton />}
      </button>
    </div>
  );
}
BackColorOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
export default BackColorOption;
