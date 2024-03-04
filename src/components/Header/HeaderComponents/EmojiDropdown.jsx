import PropTypes from 'prop-types';

import modalStyles from 'components/Header/HeaderComponents/EmojiDropdown.module.scss';

function EmojiDropdown({ emojiList }) {
  return (
    <div className={modalStyles.modalContainer}>
      <div className={modalStyles.emojiBtnContainer}>
        {emojiList.slice(0, 8).map((reaction) => (
          <button key={reaction.id} type="button" className={modalStyles.emojiBtn}>
            <p>
              {reaction?.emoji}
              {reaction?.count}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

EmojiDropdown.propTypes = {
  emojiList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      emoji: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default EmojiDropdown;
