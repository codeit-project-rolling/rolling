import styles from './ArrowButton.module.scss';
import Ellipse from '../../assets/images/Ellipse 1.svg';
import RightButton from '../../assets/images/arrow_right.svg';

function RightArrowButton() {
  return (
    <div className={styles.arrowButton}>
      <img className={styles.arrowButtonBackground} src={Ellipse} alt="화살표 버튼 배경" />
      <img className={styles.arrowButtonImg} src={RightButton} alt="오른쪽 화살표" />
    </div>
  );
}

export default RightArrowButton;
