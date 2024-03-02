import { useState } from 'react';

import BackColorOption from 'components/BackgroundOption/BackColorOption';
import BackImageOption from 'components/BackgroundOption/BackImageOption';
import Button from 'components/Button/Button';
import Header from 'components/Header/HeaderComponents/Header';
import ToggleButton from 'components/ToggleButton/ToggleButton';

import styles from 'pages/PostPage/PostPage.module.scss';

function PostPage() {
  const [recipientName, setRecipientName] = useState('');
  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('color');

  const handleRecipientNameChange = (event) => {
    setRecipientName(event.target.value);
  };
  const handleToggle = (option) => {
    setSelectedOption(option);
  };
  const handleBlur = () => {
    if (!recipientName.trim()) {
      setError('받는사람을 입력해 주세요.');
    } else {
      setError('');
    }
  };
  const onSelect = (color) => {
    console.log('Selected color:', color);
  };
  const isInputEmpty = recipientName.trim() === '';
  return (
    <div className={styles.postPageContainer}>
      <div className={styles.headerContainer}>
        <Header />;
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.recipientContainer}>
          <p className={styles.toText}>To.</p>
          <input
            className={styles.recipientNickname}
            placeholder="받는 사람 이름을 입력해주세요. "
            value={recipientName}
            onChange={handleRecipientNameChange}
            onBlur={handleBlur}
          />
          {error && <p className={styles.error}>{error}</p>}
          <p className={styles.chooseText}>배경화면을 선택해 주세요.</p>
          <p className={styles.whichChooseText}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          <ToggleButton onSelect={handleToggle} selectedOption={selectedOption} />
          {selectedOption === 'color' ? (
            <BackColorOption onSelect={onSelect} />
          ) : (
            <BackImageOption onSelect={onSelect} />
          )}

          <Button buttonType="primary56" className={styles.createBtn} disabled={isInputEmpty}>
            <p>생성하기</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
