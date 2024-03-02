import { useNavigate } from 'react-router-dom';

import ServiceMobileImg1 from 'assets/images/img-homepage-mobile-service-01.png';
import ServiceMobileImg2 from 'assets/images/img-homepage-mobile-service-02.png';
import ServiceImg1 from 'assets/images/img-homepage-service-01.png';
import ServiceImg2 from 'assets/images/img-homepage-service-02.png';

import Button from 'components/Button/Button';
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
      imageMobileSrc: ServiceMobileImg1,
      layout: 'even',
    },
    {
      pointNum: '02',
      title: (
        <>
          서로에게 이모지로 감정을
          <br className={styles.serviceTitleBr} /> 표현해보세요
        </>
      ),
      detail: '롤링 페이퍼에 이모지를 추가할 수 있어요.',
      imageSrc: ServiceImg2,
      imageMobileSrc: ServiceMobileImg2,
      layout: 'odd',
    },
  ];

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/list');
  };

  return (
    <div className={styles.body}>
      <Header />
      {/* <div className={styles.dummyHeader} /> */}
      <main className={styles.main}>
        {serviceList.map((service) => (
          <ServiceSection
            key={service.pointNum}
            pointNum={service.pointNum}
            title={service.title}
            detail={service.detail}
            imageSrc={service.imageSrc}
            imageMobileSrc={service.imageMobileSrc}
            layout={service.layout}
          />
        ))}
      </main>
      <div className={styles.bottom}>
        <Button className={styles.button} buttonType="primary56" onClick={handleClickButton}>
          <p>구경해보기</p>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
