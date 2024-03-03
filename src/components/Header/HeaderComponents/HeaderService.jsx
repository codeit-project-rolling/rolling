// eslint-disable-next-line import/no-extraneous-dependencies
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

import addEmojiIcon from 'assets/images/addEmoji.png';
import arrowDownIcon from 'assets/images/arrow_down.png';
import shareIcon from 'assets/images/share.png';

import BadgeEmoji from 'components/BadgeEmoji/BadgeEmoji';
import EmojiDropdown from 'components/Header/HeaderComponents/EmojiDropdown';
import HeaderServiceStyles from 'components/Header/HeaderComponents/HeaderService.module.scss';
// eslint-disable-next-line import/no-cycle
import ShareDropdown from 'components/Header/HeaderComponents/ShareDropdown';
import userData from 'components/Header/mock.json';

function HeaderService() {
  const [emojiDropdown, setEmojiDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [emojiSelectDropdown, setEmojiSelectDropdown] = useState(false);
  const handleEmojiClick = (emojiObject) => {
    console.log(emojiObject.emoji);
  };
  return (
    <div className={HeaderServiceStyles.headerServiceContainer}>
      <div className={HeaderServiceStyles.headerContainer}>
        <p className={HeaderServiceStyles.toNickname}>To. {userData.name}</p>
        <div className={HeaderServiceStyles.headerRight}>
          <div className={HeaderServiceStyles.howManyPerson}>
            <div className={HeaderServiceStyles.senderProfile}>
              {userData.recentMessages.slice(0, 3).map((message) => (
                <img
                  src={message.profileImageURL}
                  alt="senderProfileImg"
                  className={HeaderServiceStyles.senderProfileImg}
                  key={message.id}
                />
              ))}
              <div className={HeaderServiceStyles.senderCount}>
                +{userData.messageCount > 3 ? userData.messageCount - 3 : 0}
              </div>
            </div>
            <p>
              <span>{userData?.messageCount}</span>명이 작성했어요!
            </p>
          </div>
          <div className={HeaderServiceStyles.selectionBar} />
          <div className={HeaderServiceStyles.headerEmoji}>
            {userData.topReactions.slice(0, 3).map((reaction) => (
              <BadgeEmoji key={reaction.id} emoji={reaction?.emoji} count={reaction?.count} />
            ))}
            <button
              onClick={() => setEmojiDropdown(!emojiDropdown)}
              type="button"
              className={HeaderServiceStyles.modalIcon}
            >
              <img src={arrowDownIcon} alt="arrowDownIcon" />
              {emojiDropdown && <EmojiDropdown emojiList={userData.topReactions} />}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setEmojiSelectDropdown(!emojiSelectDropdown);
              }}
              type="button"
              className={HeaderServiceStyles.addEmojiBtn}
            >
              <img src={addEmojiIcon} alt="addEmojiIcon" />
              <p>추가</p>
            </button>
            <div className={HeaderServiceStyles.emojiSelect}>
              {emojiSelectDropdown && <EmojiPicker autoFocusSearch={false} onEmojiClick={handleEmojiClick} />}
            </div>
          </div>

          <div className={HeaderServiceStyles.selectionBar} />
          <button
            type="button"
            onClick={() => {
              setShareDropdown(!shareDropdown);
            }}
          >
            <img src={shareIcon} alt="shareImg" />
            {shareDropdown && <ShareDropdown />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderService;
