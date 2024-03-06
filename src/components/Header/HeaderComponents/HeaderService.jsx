// eslint-disable-next-line import/no-extraneous-dependencies
import EmojiPicker from 'emoji-picker-react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import arrowDownIcon from 'assets/images/arrow_down.png';
import { ReactComponent as ShareImg } from 'assets/images/share.svg';
import { ReactComponent as SmileImg } from 'assets/images/smile.svg';

import useGetRecipient from 'hooks/useGetRecipient';

import BadgeEmoji from 'components/BadgeEmoji/BadgeEmoji';
import Button from 'components/Button/Button';
import EmojiDropdown from 'components/Header/HeaderComponents/EmojiDropdown';
import HeaderServiceStyles from 'components/Header/HeaderComponents/HeaderService.module.scss';
// eslint-disable-next-line import/no-cycle
import ShareDropdown from 'components/Header/HeaderComponents/ShareDropdown';

function HeaderService({ postId }) {
  const [emojiDropdown, setEmojiDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [recipientData, setRecipienData] = useState({});
  const { recipientInfo } = useGetRecipient({ id: postId });
  const [emojiSelectDropdown, setEmojiSelectDropdown] = useState(false);
  const location = useLocation();
  const id = postId;
  const handleEmojiClick = (emojiObject) => {
    console.log(emojiObject.emoji);
  };

  useEffect(() => {
    if (recipientInfo) {
      setRecipienData(recipientInfo);
    }
  }, [recipientInfo]);
  return (
    <div className={HeaderServiceStyles.headerServiceContainer}>
      <div className={HeaderServiceStyles.headerContainer}>
        <p className={HeaderServiceStyles.toNickname}>To. {recipientData.name}</p>
        <hr className={HeaderServiceStyles.lineOnMobile} />
        <div className={HeaderServiceStyles.headerRight}>
          <div className={HeaderServiceStyles.howManyPerson}>
            <div className={HeaderServiceStyles.senderProfile}>
              {recipientData &&
                recipientData.recentMessages &&
                recipientData.recentMessages.length > 0 &&
                recipientData.recentMessages
                  .slice(0, 3)
                  .map((message) => (
                    <img
                      src={message.profileImageURL}
                      alt="senderProfileImg"
                      className={HeaderServiceStyles.senderProfileImg}
                      key={message.id}
                    />
                  ))}
              <div className={HeaderServiceStyles.senderCount}>
                +{recipientData.messageCount > 3 ? recipientData.messageCount - 3 : 0}
              </div>
            </div>
            <p>
              <span>{recipientData?.messageCount}</span>명이 작성했어요!
            </p>
          </div>
          <div className={HeaderServiceStyles.selectionBar} />
          {recipientData && recipientData.topReactions && recipientData.topReactions.length > 0 && (
            <div className={HeaderServiceStyles.headerEmoji}>
              {recipientData.topReactions.slice(0, 3).map((reaction) => (
                <BadgeEmoji key={reaction.id} emoji={reaction?.emoji} count={reaction?.count} />
              ))}
              <button
                onClick={() => {
                  setEmojiDropdown(!emojiDropdown);
                  setShareDropdown(false);
                }}
                type="button"
                className={HeaderServiceStyles.modalIcon}
              >
                <img src={arrowDownIcon} alt="arrowDownIcon" />
                {emojiDropdown && <EmojiDropdown emojiList={recipientData?.topReactions || []} />}
              </button>
            </div>
          )}
          <div>
            <Button
              buttonType="outlined36"
              onClick={() => {
                setEmojiSelectDropdown(!emojiSelectDropdown);
              }}
            >
              <SmileImg fill="black" />
              <p className={HeaderServiceStyles.onMobileHide}>추가</p>
            </Button>
            <div className={HeaderServiceStyles.emojiSelect}>
              {emojiSelectDropdown && <EmojiPicker autoFocusSearch={false} onEmojiClick={handleEmojiClick} />}
            </div>
          </div>
          <div className={HeaderServiceStyles.selectionBar2} />

          {location.pathname === `/post/${id}/edit` ? (
            <Button
              disabled
              buttonType="outlined36"
              onClick={() => {
                setShareDropdown(!shareDropdown);
                setEmojiDropdown(false);
              }}
            >
              <ShareImg fill="white" />
              {shareDropdown && <ShareDropdown />}
            </Button>
          ) : (
            <Button
              buttonType="outlined36"
              onClick={() => {
                setShareDropdown(!shareDropdown);
                setEmojiDropdown(false);
              }}
            >
              <ShareImg fill="black" />
              {shareDropdown && <ShareDropdown />}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
HeaderService.propTypes = {
  postId: PropTypes.string.isRequired,
};
export default HeaderService;
