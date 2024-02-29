import PropTypes from 'prop-types';
import { useState } from 'react';

import addEmojiIcon from 'assets/images/addEmoji.png';
import arrowDownIcon from 'assets/images/arrow_down.png';
import shareIcon from 'assets/images/share.png';

import EmojiDropdown from 'components/Header/HeaderComponents/EmojiDropdown';
import HeaderServiceStyles from 'components/Header/HeaderComponents/HeaderService.module.scss';
import ShareDropdown from 'components/Header/HeaderComponents/ShareDropdown';

function HeaderService({ userData }) {
  const [emojiDropdown, setEmojiDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);

  return (
    <div className={HeaderServiceStyles.headerServiceContainer}>
      <div className={HeaderServiceStyles.headerRight}>
        <div className={HeaderServiceStyles.howManyPerson}>
          <div className={HeaderServiceStyles.senderProfile}>
            {userData.recentMessages.slice(0, 3).map((message) => (
              <img
                src={message.profileImageURL}
                alt="senderProfileImg"
                className={HeaderServiceStyles.senderProfileImg}
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
            <button key={reaction.id} type="button" className={HeaderServiceStyles.emojiBtn}>
              <p>
                {reaction?.emoji}
                {reaction?.count}
              </p>
            </button>
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
          <button type="button" className={HeaderServiceStyles.addEmojiBtn}>
            <img src={addEmojiIcon} alt="addEmojiIcon" />
            <p>추가</p>
          </button>
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
  );
}

HeaderService.propTypes = {
  userData: PropTypes.shape({
    recentMessages: PropTypes.arrayOf(
      PropTypes.shape({
        profileImageURL: PropTypes.string.isRequired,
      })
    ).isRequired,
    messageCount: PropTypes.number.isRequired,
    topReactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        emoji: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default HeaderService;
