import { useState } from 'react';

import EmojiModal from './EmojiModal';
import HeaderServiceStyles from './HeaderService.module.scss';
import ShareModal from './ShareModal';
import addEmojiIcon from '../../assets/images/addEmoji.png';
import arrowDownIcon from '../../assets/images/arrow_down.png';
import shareIcon from '../../assets/images/share.png';

function HeaderService() {
  const [emojiModal, setEmojiModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const handleEmojiModalClick = () => {
    setEmojiModal(true);
  };
  const handleShareModalClick = () => {
    setShareModal(true);
  };
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
          <button type="button" className={HeaderServiceStyles.emojiBtn}>
            버튼
          </button>
          <button type="button" className={HeaderServiceStyles.emojiBtn}>
            버튼
          </button>
          <button type="button" className={HeaderServiceStyles.emojiBtn}>
            버튼
          </button>
          <button onClick={handleEmojiModalClick} type="button" className={HeaderServiceStyles.modalIcon}>
            <img src={arrowDownIcon} alt="arrowDownIcon" />
          </button>
          {emojiModal && <EmojiModal onClose={() => setEmojiModal(false)} />}
        </div>
        <div>
          <button type="button" className={HeaderServiceStyles.addEmojiBtn}>
            <img src={addEmojiIcon} alt="addEmojiIcon" />
            <p>추가</p>
          </button>
        </div>
        <div className={HeaderServiceStyles.selectionBar} />
        <div>
          <button type="button" className={HeaderServiceStyles.shareBtn} onClick={handleShareModalClick}>
            <img src={shareIcon} alt="shareImg" />
          </button>
          {shareModal && <ShareModal onClose={() => setShareModal(false)} />}
        </div>
      </div>
    </div>
  );
}
export default HeaderService;
