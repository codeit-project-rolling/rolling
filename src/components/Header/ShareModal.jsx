import PropTypes from 'prop-types';

import shareModalStyles from 'components/Header/ShareModal.module.scss';

function ShareModal({ onClose }) {
  return (
    <div className={shareModalStyles.shareModalContainer}>
      <button type="button" onClick={onClose}>
        X
      </button>
      <button type="button" className={shareModalStyles.shareKakao}>
        카카오톡 공유
      </button>
      <button type="button" className={shareModalStyles.shareUrl}>
        URL 공유
      </button>
    </div>
  );
}

ShareModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default ShareModal;
