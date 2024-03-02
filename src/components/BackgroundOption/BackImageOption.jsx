import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from 'components/BackgroundOption/BackImageOption.module.scss';
import CheckButton from 'components/CheckButton/CheckButton';

function BackImageOption({ onSelect }) {
  const [selectedImg, setSelectedImage] = useState('image1');

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    onSelect(image);
  };

  return (
    <div className={styles.backgroundOption}>
      <button
        className={`${styles.option} ${selectedImg === 'image1' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image1')}
        type="button"
      >
        <img src="https://picsum.photos/id/683/3840/2160" alt="image1" className={styles.image} />
        {selectedImg === 'image1' && <CheckButton />}
      </button>
      <button
        className={`${styles.option} ${styles.image2} ${selectedImg === 'image2' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image2')}
        type="button"
      >
        {selectedImg === 'image2' && <CheckButton />}
        <img src="https://picsum.photos/id/683/3840/2160" alt="image2" className={styles.image} />
      </button>
      <button
        className={`${styles.option} ${styles.image3} ${selectedImg === 'image3' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image3')}
        type="button"
      >
        {selectedImg === 'image3' && <CheckButton />}
        <img src="https://picsum.photos/id/683/3840/2160" alt="image3" className={styles.image} />
      </button>
      <button
        className={`${styles.option} ${styles.image4} ${selectedImg === 'image4' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image4')}
        type="button"
      >
        {selectedImg === 'image4' && <CheckButton />}
        <img src="https://picsum.photos/id/683/3840/2160" alt="image4" className={styles.image} />
      </button>
    </div>
  );
}

BackImageOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default BackImageOption;
