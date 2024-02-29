import BackgroundOption from 'components/BackgroundOption/BackgroundOption';
import Header from 'components/Header/HeaderComponents/Header';
import ToggleButton from 'components/ToggleButton/ToggleButton';

import styles from 'pages/PostPage/PostPage.module.scss';

function PostPage() {
  const onSelect = (color) => {
    console.log('Selected color:', color);
    // 여기에서 선택한 색상에 대한 처리를 수행할 수 있습니다.
  };
  return (
    <div className={styles.postPageContainer}>
      <div className={styles.headerContainer}>
        <Header />;
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.recipientContainer}>
          <p className={styles.toText}>To.</p>
          <input className={styles.recipientNickname} placeholder="받는 사람 이름을 입력해주세요. " />
          <p className={styles.chooseText}>배경화면을 선택해 주세요.</p>
          <p className={styles.whichChooseText}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          <ToggleButton />
          <BackgroundOption onSelect={onSelect} />
        </div>
      </div>
    </div>
  );
}

export default PostPage;