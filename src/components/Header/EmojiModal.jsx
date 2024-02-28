import PropTypes from 'prop-types';
import React from 'react';

import modalStyles from 'components/Header/ShareModal.module.scss';

function EmojiModal({ onClose }) {
  return (
    <div className={modalStyles.modalContainer}>
      <button type="button" onClick={onClose} className={modalStyles.closeModal}>
        X
      </button>
      <p>모달</p>
    </div>
  );
}

EmojiModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EmojiModal;
