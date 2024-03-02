import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from 'components/BackgroundOption/BackImageOption.module.scss';
import CheckButton from 'components/CheckButton/CheckButton';

function BackImageOption({ onSelect, backgroundImgList }) {
  const [selectedImg, setSelectedImage] = useState(backgroundImgList[0]);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    onSelect(image);
  };

  return (
    <div className={styles.backgroundOption}>
      <button
        className={`${styles.option} ${selectedImg === backgroundImgList[0] ? styles.selected : ''}`}
        onClick={() => handleImageSelect(backgroundImgList[0])}
        type="button"
      >
        <img src={backgroundImgList[0]} alt="image1" className={styles.image} />
        {selectedImg === backgroundImgList[0] && <CheckButton />}
      </button>
      <button
        className={`${styles.option} ${styles.image2} ${selectedImg === backgroundImgList[1] ? styles.selected : ''}`}
        onClick={() => handleImageSelect(backgroundImgList[1])}
        type="button"
      >
        {selectedImg === backgroundImgList[1] && <CheckButton />}
        <img src={backgroundImgList[1]} alt="image2" className={styles.image} />
      </button>
      <button
        className={`${styles.option} ${styles.image3} ${selectedImg === backgroundImgList[2] ? styles.selected : ''}`}
        onClick={() => handleImageSelect(backgroundImgList[2])}
        type="button"
      >
        {selectedImg === backgroundImgList[2] && <CheckButton />}
        <img src={backgroundImgList[2]} alt="image3" className={styles.image} />
      </button>
      <button
        className={`${styles.option} ${styles.image4} ${selectedImg === backgroundImgList[3] ? styles.selected : ''}`}
        onClick={() => handleImageSelect(backgroundImgList[3])}
        type="button"
      >
        {selectedImg === backgroundImgList[3] && <CheckButton />}
        <img src={backgroundImgList[3]} alt="image4" className={styles.image} />
      </button>
    </div>
  );
}

BackImageOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
  backgroundImgList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BackImageOption;
