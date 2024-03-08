// eslint-disable-next-line import/no-extraneous-dependencies
import EmojiPicker from 'emoji-picker-react';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

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

import { UserContext } from 'pages/PostPage/PostIdPage/EditPage/EditPage';

function HeaderService({ postId }) {
  const [buttonType, setButtonType] = useState('outlined36');
  const [emojiDropdown, setEmojiDropdown] = useState(false);
  const [shareDropdown, setShareDropdown] = useState(false);
  const [emojiSelectDropdown, setEmojiSelectDropdown] = useState(false);
  const { getRecipient, data: recipientInfo } = useGetRecipient({ id: postId });
  const isEdit = useContext(UserContext);
  const { postReaction } = usePostReaction();
  const handleClickBadge = async (emoji) => {
    const postData = { id: postId, emoji, isIncrease: true };
    await postReaction(postData);
    getRecipient();
  };

  const location = useLocation();
  // const id = postId;
  const handleEmojiClick = async (emojiObject) => {
    const postData = { id: postId, emoji: emojiObject.emoji, isIncrease: true };
    await postReaction(postData);
    getRecipient();
  };

  useEffect(() => {
    getRecipient();
  }, [isEdit]);

  // 뷰포트 너비에 따라 buttonType 상태를 업데이트하는 효과
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setButtonType('outlined28');
      } else {
        setButtonType('outlined36');
      }
    }

    // 컴포넌트 마운트 시점에 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
    // 초기 설정을 위해 한 번 호출
    handleResize();

    // 컴포넌트 언마운트 시점에 리사이즈 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={HeaderServiceStyles.headerServiceContainer}>
      <div className={HeaderServiceStyles.headerContainer}>
        <div className={HeaderServiceStyles.headerNickName}>
          <p className={HeaderServiceStyles.toNickname}>To. {recipientInfo?.name}</p>
        </div>
        <hr className={HeaderServiceStyles.lineOnMobile} />
        <div className={HeaderServiceStyles.headerRight}>
          <div className={HeaderServiceStyles.howManyPerson}>
            <div className={HeaderServiceStyles.senderProfile}>
              {recipientInfo?.recentMessages?.length > 0 &&
                recipientInfo?.recentMessages
                  .slice(0, 3)
                  .map((message) => (
                    <img
                      src={message.profileImageURL}
                      alt="senderProfileImg"
                      className={HeaderServiceStyles.senderProfileImg}
                      key={message.id}
                    />
                  ))}
              {recipientInfo?.messageCount > 3 && (
                <div className={HeaderServiceStyles.senderCount}>+{recipientInfo.messageCount - 3}</div>
              )}
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
                <img className={HeaderServiceStyles.arrowDownIcon} src={arrowDownIcon} alt="arrowDownIcon" />
                {emojiDropdown && <EmojiDropdown recipienId={postId} />}
              </button>
            </div>
          )}
          <div>
            <Button
              className={HeaderServiceStyles.headerRightButton}
              buttonType={buttonType}
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
          {location.pathname === `/post/${postId}/edit` ? (
            <Button
              className={HeaderServiceStyles.headerRightButton}
              disabled
              buttonType={buttonType}
              onClick={() => {
                setShareDropdown(!shareDropdown);
                setEmojiDropdown(false);
                setEmojiSelectDropdown(false);
              }}
            >
              <ShareImg fill="white" />
              {shareDropdown && <ShareDropdown />}
            </Button>
          ) : (
            <Button
              className={HeaderServiceStyles.headerRightButton}
              buttonType={buttonType}
              onClick={() => {
                setShareDropdown(!shareDropdown);
                setEmojiDropdown(false);
                setEmojiSelectDropdown(false);
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
