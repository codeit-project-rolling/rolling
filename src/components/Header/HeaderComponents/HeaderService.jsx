// eslint-disable-next-line import/no-extraneous-dependencies
import EmojiPicker from 'emoji-picker-react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import arrowDownIcon from 'assets/images/arrow_down.png';
import { ReactComponent as ShareImg } from 'assets/images/share.svg';
import { ReactComponent as SmileImg } from 'assets/images/smile.svg';

import useGetRecipient from 'hooks/useGetRecipient';
import usePostReaction from 'hooks/usePostReaction';

import BadgeEmoji from 'components/BadgeEmoji/BadgeEmoji';
import Button from 'components/Button/Button';
import EmojiDropdown from 'components/Header/HeaderComponents/EmojiDropdown';
import HeaderServiceStyles from 'components/Header/HeaderComponents/HeaderService.module.scss';
// eslint-disable-next-line import/no-cycle
import ShareDropdown from 'components/Header/HeaderComponents/ShareDropdown';

function HeaderService({ postId }) {
  const [emojiDropdown, setEmojiDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [emojiSelectDropdown, setEmojiSelectDropdown] = useState(false);
  const { getRecipient, data: recipientInfo, loading } = useGetRecipient({ id: postId });

  const { postReaction } = usePostReaction();
  const handleClickBadge = (emoji) => {
    const postData = { id: postId, emoji, isIncrease: true };
    postReaction(postData);
    getRecipient();
  };

  const handleEmojiClick = (emojiObject) => {
    console.log(emojiObject.emoji);
    const postData = { id: postId, emoji: emojiObject.emoji, isIncrease: true };
    postReaction(postData);
  };

  useEffect(() => {
    if (!loading) {
      console.log(recipientInfo);
    }
  }, [recipientInfo, loading]);
  return (
    <div className={HeaderServiceStyles.headerServiceContainer}>
      <div className={HeaderServiceStyles.headerContainer}>
        <p className={HeaderServiceStyles.toNickname}>To. {recipientInfo?.name}</p>
        <hr className={HeaderServiceStyles.lineOnMobile} />
        <div className={HeaderServiceStyles.headerRight}>
          <div className={HeaderServiceStyles.howManyPerson}>
            <div className={HeaderServiceStyles.senderProfile}>
              {recipientInfo?.recentMessages?.length > 0 &&
                recipientInfo.recentMessages
                  .slice(0, 3)
                  .map((message) => (
                    <img
                      src={message.profileImageURL}
                      alt="senderProfileImg"
                      className={HeaderServiceStyles.senderProfileImg}
                      key={message.id}
                    />
                  ))}
              <div className={HeaderServiceStyles.senderCount}>+{recipientInfo?.messageCount}</div>
            </div>
            <p>
              <span>{recipientInfo?.messageCount}</span>명이 작성했어요!
            </p>
          </div>
          <div className={HeaderServiceStyles.selectionBar} />
          {recipientInfo && recipientInfo.topReactions && recipientInfo.topReactions.length > 0 && (
            <div className={HeaderServiceStyles.headerEmoji}>
              {recipientInfo.topReactions.slice(0, 3).map((reaction) => (
                <button
                  type="button"
                  onClick={() => handleClickBadge(reaction.emoji)}
                  aria-label={`React with ${reaction.name}`}
                  key={reaction.emoji}
                  className={HeaderServiceStyles.badgeBtn}
                >
                  <BadgeEmoji emoji={reaction?.emoji} count={reaction?.count} />
                </button>
              ))}
              <button
                onClick={() => {
                  setEmojiDropdown(!emojiDropdown);
                  setShareDropdown(false);
                  setEmojiSelectDropdown(false);
                }}
                type="button"
                className={HeaderServiceStyles.modalIcon}
              >
                <img src={arrowDownIcon} alt="arrowDownIcon" />
                {emojiDropdown && <EmojiDropdown recipienId={postId} />}
              </button>
            </div>
          )}
          <div className={HeaderServiceStyles.onMobileStyle}>
            <Button
              buttonType="outlined36"
              onClick={() => {
                setEmojiSelectDropdown(!emojiSelectDropdown);
                setEmojiDropdown(false);
                setShareDropdown(false);
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
          <Button
            buttonType="outlined36"
            onClick={() => {
              setShareDropdown(!shareDropdown);
              setEmojiDropdown(false);
              setEmojiSelectDropdown(false);
            }}
          >
            <ShareImg fill="black" />
            {shareDropdown && <ShareDropdown />}
          </Button>
        </div>
      </div>
    </div>
  );
}
HeaderService.propTypes = {
  postId: PropTypes.string.isRequired,
};
export default HeaderService;
