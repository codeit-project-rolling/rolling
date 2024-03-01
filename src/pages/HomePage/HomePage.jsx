import useGetRecipientList from 'hooks/useGetRecipientList';

import HeaderLayout from 'components/Header/HeaderLayout';
import Card from 'components/card/card';

import styles from 'pages/HomePage/HomePage.module.scss';

function HomePage() {
  const { data } = useGetRecipientList();
  console.log(data);
  return (
    <>
      <HeaderLayout />
      <div className={styles.heightCover} />
      <div className={styles.cardListContainer}>
        <Card data={data} />
      </div>
    </>
  );
}

export default HomePage;
