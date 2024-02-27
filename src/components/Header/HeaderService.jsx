import HeaderServiceStyles from './HeaderService.module.scss';
import addEmojiIcon from '../../assets/images/addEmoji.png';
import arrowDownIcon from '../../assets/images/arrow_down.png';
import shareIcon from '../../assets/images/share.png';

function HeaderService() {
  return (
    <div className={HeaderServiceStyles.headerServiceContainer}>
      <p className={HeaderServiceStyles.toNickname}>To. Ashely Kim</p>
      <div className={HeaderServiceStyles.headerRight}>
        <div className={HeaderServiceStyles.howManyPerson}>
          <p>
            <span>N</span>명이 작성했어요!
          </p>
        </div>
        <div className={HeaderServiceStyles.selectionBar} />
        <div className={HeaderServiceStyles.headerEmoji}>
          <button type="button">버튼</button>
          <button type="button">버튼</button>
          <button type="button">버튼</button>
          <img src={arrowDownIcon} alt="arrowDownIcon" />
        </div>
        <div>
          <button type="button" className={HeaderServiceStyles.addEmojiBtn}>
            <img src={addEmojiIcon} alt="addEmojiIcon" />
            <p>추가</p>
          </button>
        </div>
        <div className={HeaderServiceStyles.selectionBar} />
        <div>
          <button type="button" className={HeaderServiceStyles.shareBtn}>
            <img src={shareIcon} alt="shareImg" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderService;
