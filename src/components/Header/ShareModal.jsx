import PropTypes from 'prop-types';

import shareModalStyles from 'components/Header/ShareModal.module.scss';

import ModalOutsideClickHandler from 'utils/ModalOutsideClick';

function ShareModal({ onClose }) {
  return (
    <ModalOutsideClickHandler onClose={onClose}>
      <div className={shareModalStyles.shareModalContainer}>
        <button type="button" className={shareModalStyles.shareKakao}>
          카카오톡 공유
        </button>
        <button type="button" className={shareModalStyles.shareUrl}>
          URL 공유
        </button>
      </div>
    </ModalOutsideClickHandler>
  );
}

ShareModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ShareModal;
