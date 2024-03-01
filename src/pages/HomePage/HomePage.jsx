import Button from 'components/Button/Button';

import styles from 'pages/HomePage/HomePage.module.scss';

function HomePage() {
  return (
    <Button className={styles.button} buttonType="primary56">
      <p>안녕</p>
    </Button>
  );
}

export default HomePage;
