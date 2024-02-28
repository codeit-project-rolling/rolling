import { useState } from 'react';

import addEmojiIcon from 'assets/images/addEmoji.png';
import arrowDownIcon from 'assets/images/arrow_down.png';
import shareIcon from 'assets/images/share.png';

import EmojiModal from 'components/Header/EmojiModal';
import HeaderServiceStyles from 'components/Header/HeaderService.module.scss';
import ShareModal from 'components/Header/ShareModal';
import userData from 'components/Header/mock.json';

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
      <p className={HeaderServiceStyles.toNickname}>To. {userData.name}</p>
      <div className={HeaderServiceStyles.headerRight}>
        <div className={HeaderServiceStyles.howManyPerson}>
          <div className={HeaderServiceStyles.senderProfile}>
            {userData.recentMessages.slice(0, 3).map((profileImg) => (
              <img
                src={profileImg.profileImageURL}
                alt="senderProfileImg"
                className={HeaderServiceStyles.senderProfileImg}
              />
            ))}
            <div className={HeaderServiceStyles.senderCount}>
              +{userData.messageCount > 3 ? userData.messageCount - 3 : 0}
            </div>
          </div>
          <p>
            <span>{userData.messageCount}</span>명이 작성했어요!
          </p>
        </div>
        <div className={HeaderServiceStyles.selectionBar} />
        <div className={HeaderServiceStyles.headerEmoji}>
          {userData.topReactions.slice(0, 3).map((reaction) => (
            <button key={reaction.id} type="button" className={HeaderServiceStyles.emojiBtn}>
              <p>
                {reaction.emoji}
                {reaction.count}
              </p>
            </button>
          ))}
          <button onClick={handleEmojiModalClick} type="button" className={HeaderServiceStyles.modalIcon}>
            <img src={arrowDownIcon} alt="arrowDownIcon" />
          </button>
          {emojiModal && <EmojiModal onClose={() => setEmojiModal(false)} emojiList={userData.topReactions} />}
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
