import { useTheme, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import useGetReactionList from 'hooks/useGetReactionList';
import usePostReaction from 'hooks/usePostReaction';

import BadgeEmoji from 'components/BadgeEmoji/BadgeEmoji';
import modalStyles from 'components/Header/HeaderComponents/EmojiDropdown.module.scss';

function EmojiDropdown({ recipienId, getRecipient }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const { data: getData, loading: getLoading, error: getError } = useGetReactionList({ id: recipienId });
  const { postReaction, data: postData, loading: postLoading, error: postError } = usePostReaction();
  const [reactionList, setReactionList] = useState([]);

  const handleClickBadge = (emoji) => () => {
    const post = { id: recipienId, emoji, isIncrease: true };
    postReaction(post);
    getRecipient();
  };

  useEffect(() => {
    if (!getLoading && !getError) {
      setReactionList(getData.results);
    }
  }, [getLoading, getError]);

  useEffect(() => {
    if (!postLoading && !postError) {
      // console.log('postData', postData);
      setReactionList((currentList) => {
        // 새로운 반응의 id가 현재 리스트에 있는지 확인
        const existingIndex = currentList.findIndex((reaction) => reaction.id === postData?.id);

        if (existingIndex !== -1) {
          // 존재하면, 해당 반응을 새로운 객체로 교체
          const updatedList = [...currentList];
          updatedList[existingIndex] = postData;
          return updatedList;
        }
        // 존재하지 않으면, 새로운 객체를 배열에 추가
        return [...currentList, postData];
      });
    }
  }, [postData, postLoading, postError]);

  return (
    <div className={modalStyles.modalContainer}>
      <div className={`${modalStyles.emojiBtnContainer} ${isTablet ? modalStyles.tabletEmojiBtn : ''}`}>
        {reactionList?.slice(0, isTablet ? 6 : 8).map((reaction) => (
          <button
            key={reaction.id}
            type="button"
            className={modalStyles.emojiBtn}
            onClick={handleClickBadge(reaction.emoji)}
            aria-label={`React with ${reaction.emoji}`}
          >
            <BadgeEmoji emoji={reaction?.emoji} count={reaction?.count} />
          </button>
        ))}
      </div>
    </div>
  );
}

EmojiDropdown.propTypes = {
  recipienId: PropTypes.string.isRequired,
  getRecipient: PropTypes.func.isRequired,
};

export default EmojiDropdown;
