import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from 'components/BackgroundOption/BackImageOption.module.scss';
import CheckButton from 'components/CheckButton/CheckButton';

function BackImageOption({ onSelect }) {
  const [selectedImg, setSelectedImg] = useState('beige');

  const handleColorSelect = (color) => {
    setSelectedImg(color);
    onSelect(color);
  };

  return (
    <div className={styles.backgroundOption}>
      <button className={styles.option} onClick={() => handleColorSelect('beige')} type="button">
        <img src="https://picsum.photos/id/683/3840/2160" alt="Beige" className={styles.image} />
        {selectedImg === 'beige' && <CheckButton />}
      </button>
      <button className={`${styles.option} ${styles.purple}`} onClick={() => handleColorSelect('purple')} type="button">
        {selectedImg === 'purple' && <CheckButton />}
        <img src="https://picsum.photos/id/683/3840/2160" alt="Purple" className={styles.image} />
      </button>
      <button className={`${styles.option} ${styles.blue}`} onClick={() => handleColorSelect('blue')} type="button">
        {selectedImg === 'blue' && <CheckButton />}
        <img src="https://picsum.photos/id/683/3840/2160" alt="Blue" className={styles.image} />
      </button>
      <button className={`${styles.option} ${styles.green}`} onClick={() => handleColorSelect('green')} type="button">
        {selectedImg === 'green' && <CheckButton />}
        <img src="https://picsum.photos/id/683/3840/2160" alt="Green" className={styles.image} />
      </button>
    </div>
  );
}
BackImageOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
export default BackImageOption;
