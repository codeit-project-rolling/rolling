/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import useGetProfileImageList from 'hooks/useGetProfileImg';

import styles from 'components/ProfileImg/ProfileImg.module.scss';

function ProfileImg({ onChange, selectedImgUrl }) {
  const { loading, data, getProfileImageList } = useGetProfileImageList();

  const handleProfileImgClick = (imageUrl) => {
    onChange(imageUrl);
  };
  useEffect(() => {
    if (!loading) {
      getProfileImageList();
    }
  }, [loading]);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.defaultProfileImgContainer}>
        <img className={styles.defaultProfileImg} alt="기본 프로필" src={selectedImgUrl} />
      </div>
      <div className={styles.profileContent}>
        <p className={styles.profileImgSelect}>프로필 이미지를 선택해주세요!</p>
        <div className={styles.profileImgSelectContainer}>
          {data?.imageUrls.map((image) => (
            <button
              className={styles.profileImgContainer}
              key={image}
              type="submit"
              onClick={() => handleProfileImgClick(image)}
            >
              <img className={styles.profileImg} src={image} alt="프로필 이미지" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

ProfileImg.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedImgUrl: PropTypes.string.isRequired,
};

export default ProfileImg;
