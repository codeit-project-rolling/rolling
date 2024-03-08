/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';

import styles from 'components/ProfileImg/ProfileImg.module.scss';

const profileImages = [
  'https://picsum.photos/id/522/100/100',
  'https://picsum.photos/id/547/100/100',
  'https://picsum.photos/id/268/100/100',
  'https://picsum.photos/id/1082/100/100',
  'https://picsum.photos/id/571/100/100',
  'https://picsum.photos/id/494/100/100',
  'https://picsum.photos/id/859/100/100',
  'https://picsum.photos/id/437/100/100',
  'https://picsum.photos/id/1064/100/100',
];

function ProfileImg({ onChange, selectedImgUrl }) {
  const handleProfileImgClick = (imageUrl) => {
    onChange(imageUrl);
  };
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.defaultProfileImg} alt="기본 프로필" src={selectedImgUrl} />
      </div>
      <div className={styles.profileContent}>
        <p className={styles.profileImgSelect}>프로필 이미지를 선택해주세요!</p>
        <div className={styles.profileImgSelectContainer}>
          {profileImages.map((image, i) => (
            <button className={styles.profileImgContainer} type="submit" onClick={() => handleProfileImgClick(image)}>
              <img className={styles.profileImg} key={i} src={image} alt="프로필 이미지" />
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
