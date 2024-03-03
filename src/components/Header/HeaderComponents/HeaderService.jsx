import { useState } from 'react';

import arrowDownIcon from 'assets/images/arrow_down.png';
import { ReactComponent as ShareImg } from 'assets/images/share.svg';
import { ReactComponent as SmileImg } from 'assets/images/smile.svg';

import BadgeEmoji from 'components/BadgeEmoji/BadgeEmoji';
import Button from 'components/Button/Button';
import EmojiDropdown from 'components/Header/HeaderComponents/EmojiDropdown';
import HeaderServiceStyles from 'components/Header/HeaderComponents/HeaderService.module.scss';
import ShareDropdown from 'components/Header/HeaderComponents/ShareDropdown';
import userData from 'components/Header/mock.json';

function HeaderService() {
  const [emojiDropdown, setEmojiDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);

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
            <Button buttonType="outlined36">
              <SmileImg fill="black" />
              <p>추가</p>
            </Button>
          </div>
          <div className={HeaderServiceStyles.selectionBar} />
          <Button
            buttonType="outlined36"
            onClick={() => {
              setShareDropdown(!shareDropdown);
            }}
          >
            <ShareImg fill="black" />
          </Button>
          {shareDropdown && <ShareDropdown />}
        </div>
      </div>
    </div>
  );
}

export default HeaderService;
