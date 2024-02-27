import CloseIcon from 'assets/images/icon-close.svg';
import CompletedIcon from 'assets/images/icon-completed.svg';

import styles from 'components/Toast/Toast.module.scss';

function Toast() {
  const toastClasses = styles.toast;
  const toastContentClasses = styles.toastContent;
  const completedIconClasses = styles.completedIcon;
  const textClasses = styles.text;
  const closeIconClasses = styles.closeIcon;
  return (
    <div className={toastClasses}>
      <div className={toastContentClasses}>
        <img className={completedIconClasses} src={CompletedIcon} alt="completed-icon" />
        <p className={textClasses}>URL이 복사 되었습니다.</p>
      </div>
      <img className={closeIconClasses} src={CloseIcon} alt="close-icon" />
    </div>
  );
}

export default Toast;
