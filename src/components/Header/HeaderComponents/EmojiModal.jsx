import PropTypes from 'prop-types';
// import { useEffect, useRef } from 'react';

import modalStyles from 'components/Header/HeaderComponents/EmojiModal.module.scss';

import ModalOutsideClickHandler from 'utils/ModalOutsideClick';

function EmojiModal({ onClose, emojiList }) {
  return (
    <ModalOutsideClickHandler onClose={onClose}>
      <div className={modalStyles.modalContainer}>
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
    </ModalOutsideClickHandler>
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
