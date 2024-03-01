import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useGetMessageList from 'hooks/useGetMessageList';
// import useGetRecipient from 'hooks/useGetRecipient';
// import useGetRecipientList from 'hooks/useGetRecipientList';

import HeaderLayout from 'components/Header/HeaderLayout';
import PlusButton from 'components/PlusButton/PlusButton';
import Card from 'components/card/card';

import styles from 'pages/HomePage/HomePage.module.scss';

function HomePage() {
  const buttonAndCardCombinedClass = classNames(styles.basicButton, styles.card);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [exportData, setExportData] = useState([]);

  const { data } = useGetMessageList({ id: 3058 });
  const handleClick = () => {
    navigate('/post/3058/message');
  };

  useEffect(() => {
    if (data) {
      setExportData(data.results);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <HeaderLayout />
      <div className={styles.heightCover} />
      <div className={styles.cardListContainer}>
        <div className={styles.cardList}>
          <div className={buttonAndCardCombinedClass}>
            <PlusButton onClick={handleClick} />
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            exportData?.map((item) => <Card className={styles.card} key={item.id} data={item} />)
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
