import shareModalStyles from 'components/Header/HeaderComponents/ShareDropdown.module.scss';

function ShareDropdown() {
  return (
    <div className={shareModalStyles.shareModalContainer}>
      <button type="button" className={shareModalStyles.shareKakao}>
        카카오톡 공유
      </button>
      <button type="button" className={shareModalStyles.shareUrl}>
        URL 공유
      </button>
    </div>
  );
}

export default ShareDropdown;
