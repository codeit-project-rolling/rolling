import Header from 'components/Header/HeaderComponents/Header';

import styles from 'pages/HomePage/HomePage.module.scss';

function HomePage() {
  return (
    <div>
      <Header />
      <div className={styles.dummyHeader} />
      <section className={styles.serviceSection}>
        <div className={styles.pointNum}>Point. 01</div>
      </section>
    </div>
  );
}

export default HomePage;
