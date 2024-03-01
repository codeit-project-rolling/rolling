import ServiceImg1 from 'assets/images/img-homepage-service-01.png';

import Header from 'components/Header/HeaderComponents/Header';
import ServiceSection from 'components/ServiceSection/ServiceSection';

import styles from 'pages/HomePage/HomePage.module.scss';

function HomePage() {
  const serviceList = [
    {
      pointNum: '01',
      title: (
        <>
          누구나 손쉽게, 온라인
          <br className={styles.serviceTitleBr} /> 롤링 페이퍼를 만들 수 있어요
        </>
      ),
      detail: '로그인 없이 자유롭게 만들어요.',
      imageSrc: ServiceImg1,
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.dummyHeader} />
      {serviceList.map((service) => (
        <ServiceSection
          pointNum={service.pointNum}
          title={service.title}
          detail={service.detail}
          imageSrc={service.imageSrc}
        />
      ))}
    </div>
  );
}

export default HomePage;
