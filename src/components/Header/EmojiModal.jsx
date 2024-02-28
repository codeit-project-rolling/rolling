import PropTypes from 'prop-types';
import React from 'react';

import modalStyles from 'components/Header/EmojiModal.module.scss';

function EmojiModal({ onClose, emojiList }) {
  return (
    <div className={modalStyles.modalContainer}>
      <button type="button" onClick={onClose} className={modalStyles.closeModal}>
        X
      </button>
      <div className={modalStyles.emojiBtnContainer}>
        {emojiList.map((reaction) => (
          <button key={reaction.id} type="button" className={modalStyles.emojiBtn}>
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

EmojiModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  emojiList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      emoji: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default EmojiModal;
