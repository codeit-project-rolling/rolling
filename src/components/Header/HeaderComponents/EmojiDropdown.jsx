import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import useGetReactionList from 'hooks/useGetReactionList';
import usePostReaction from 'hooks/usePostReaction';

import modalStyles from 'components/Header/HeaderComponents/EmojiDropdown.module.scss';

function EmojiDropdown({ recipienId }) {
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
      <div className={modalStyles.emojiBtnContainer}>
        {reactionList.slice(0, 8).map((reaction) => (
          <button
            key={reaction.id}
            type="button"
            className={modalStyles.emojiBtn}
            onClick={handleClickBadge(reaction.emoji)}
          >
            <p>
              {reaction.emoji}
              {reaction.count}
            </p>
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
