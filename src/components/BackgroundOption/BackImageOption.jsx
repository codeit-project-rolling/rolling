import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import useGetBackgroundImageList from 'hooks/useGetBackgroundImageList';

import styles from 'components/BackgroundOption/BackImageOption.module.scss';
import CheckButton from 'components/CheckButton/CheckButton';

function BackImageOption({ onSelect }) {
  const [selectedImg, setSelectedImage] = useState('image1');
  const [backgrounImgList, setBackgroundImgList] = useState([]);
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    onSelect(image);
  };

  const { data, loading, error } = useGetBackgroundImageList();
  useEffect(() => {
    if (!loading && !error) {
      setBackgroundImgList(data.imageUrls);
    } else {
      console.log(error);
    }
  });

  return (
    <div className={styles.backgroundOption}>
      <button
        className={`${styles.option} ${selectedImg === 'image1' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image1')}
        type="button"
      >
        <img src={backgrounImgList[0]} alt="image1" className={styles.image} />
        {selectedImg === 'image1' && <CheckButton />}
      </button>
      <button
        className={`${styles.option} ${styles.image2} ${selectedImg === 'image2' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image2')}
        type="button"
      >
        {selectedImg === 'image2' && <CheckButton />}
        <img src={backgrounImgList[1]} alt="image2" className={styles.image} />
      </button>
      <button
        className={`${styles.option} ${styles.image3} ${selectedImg === 'image3' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image3')}
        type="button"
      >
        {selectedImg === 'image3' && <CheckButton />}
        <img src={backgrounImgList[2]} alt="image3" className={styles.image} />
      </button>
      <button
        className={`${styles.option} ${styles.image4} ${selectedImg === 'image4' ? styles.selected : ''}`}
        onClick={() => handleImageSelect('image4')}
        type="button"
      >
        {selectedImg === 'image4' && <CheckButton />}
        <img src={backgrounImgList[3]} alt="image4" className={styles.image} />
      </button>
    </div>
  );
}

BackImageOption.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default BackImageOption;
