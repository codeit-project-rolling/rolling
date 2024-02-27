import styles from './ArrowButton.module.scss';
import Ellipse from '../../assets/images/Ellipse 1.svg';
import LeftButton from '../../assets/images/arrow_left.svg';

function LeftArrowButton() {
  return (
    <div className={styles.arrowButton}>
      <img className={styles.arrowButtonBackground} src={Ellipse} alt="화살표 버튼 배경" />
      <img className={styles.arrowButtonImg} src={LeftButton} alt="왼쪽 화살표" />
    </div>
  );
}

export default LeftArrowButton;
