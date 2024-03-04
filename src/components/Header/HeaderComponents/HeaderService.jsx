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
import ShareDropdown from 'components/Header/HeaderComponents/ShareDropdown';

function HeaderService({ postId }) {
  const [emojiDropdown, setEmojiDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [recipientData, setRecipienData] = useState([]);
  const { data, loading, error } = useGetRecipient({ id: postId });
  useEffect(() => {
    if (!loading && !error && data) {
      setRecipienData(data);
    }
  }, [data, loading, error]);
  const { postReaction } = usePostReaction();
  const handleClickBadge = (emoji) => async () => {
    const postData = { id: postId, emoji, isIncrease: true };
    await postReaction(postData);
  };
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
                <button
                  type="button"
                  onClick={handleClickBadge(reaction.emoji)}
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
            <Button buttonType="outlined36">
              <SmileImg fill="black" />
              <p className={HeaderServiceStyles.onMobileHide}>추가</p>
            </Button>
          </div>
          <div className={HeaderServiceStyles.selectionBar2} />
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
        </div>
      </div>
    </div>
  );
}
HeaderService.propTypes = {
  postId: PropTypes.string.isRequired,
};
export default HeaderService;
