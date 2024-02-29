import PropTypes from 'prop-types';

import CloseIcon from 'assets/images/icon-close.svg';
import CompletedIcon from 'assets/images/icon-completed.svg';

import styles from 'components/Toast/Toast.module.scss';

// 부모 요소로부터 onClick 받아오기
// 닫기 버튼을 클릭하면 setIsToastOpen(false);
function Toast({ onClick }) {
  // className
  const toastClasses = styles.toast;
  const toastContentClasses = styles.toastContent;
  const completedIconClasses = styles.completedIcon;
  const textClasses = styles.text;
  const closeButtonClasses = styles.closeButton;
  const closeIconClasses = styles.closeIcon;

  return (
    <div className={toastClasses}>
      <div className={toastContentClasses}>
        <img className={completedIconClasses} src={CompletedIcon} alt="completed-icon" />
        <p className={textClasses}>URL이 복사 되었습니다.</p>
      </div>
      {/* 아래 아이콘을 닫기 버튼으로 바꿀 것 */}
      <button className={closeButtonClasses} onClick={onClick} type="button">
        <img className={closeIconClasses} src={CloseIcon} alt="close-icon" />
      </button>
    </div>
  );
}

Toast.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toast;
