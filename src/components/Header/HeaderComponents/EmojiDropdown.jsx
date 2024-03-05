import { useTheme, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import useGetReactionList from 'hooks/useGetReactionList';
import usePostReaction from 'hooks/usePostReaction';

import BadgeEmoji from 'components/BadgeEmoji/BadgeEmoji';
import modalStyles from 'components/Header/HeaderComponents/EmojiDropdown.module.scss';

function EmojiDropdown({ recipienId }) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const { data, loading, error } = useGetReactionList({ id: recipienId });
  const [reactionList, setReactionList] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setReactionList(data.results); // data.results를 사용하여 reactionList 설정
    }
  }, [data, loading, error]);

  const { postReaction } = usePostReaction();
  const handleClickBadge = (emoji) => async () => {
    const postData = { id: recipienId, emoji, isIncrease: true };
    await postReaction(postData);
  };
  return (
    <div className={modalStyles.modalContainer}>
      <div className={`${modalStyles.emojiBtnContainer} ${isTablet ? modalStyles.tabletEmojiBtn : ''}`}>
        {reactionList.slice(0, isTablet ? 6 : 8).map((reaction) => (
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
};

export default EmojiDropdown;
