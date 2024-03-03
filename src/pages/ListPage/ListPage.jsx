/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import { useNavigate } from 'react-router-dom';

import useGetRecipientList from 'hooks/useGetRecipientList';

import Button from 'components/Button/Button';
import Header from 'components/Header/HeaderComponents/Header';
import CardSlider from 'components/Slider/CardSlider';
import CardList from 'components/card/Cardlist';

import ListCardStyle from './ListPage.module.scss';

function ListPage() {
  const { data: likeList } = useGetRecipientList({
    sortByLike: true,
  });
  const { data: recentList } = useGetRecipientList();
  const navigate = useNavigate();
  const handleMoveLink = () => {
    navigate('/post');
  };

  return (
    <div className={ListCardStyle.container}>
      <Header />
      <div className={ListCardStyle.cardSection}>
        <div className={ListCardStyle.title}>인기 롤링 페이퍼 🔥</div>
        <CardSlider itemsPerPage={4}>
          {likeList?.results?.map((v) => (
            <CardList data={v} />
          ))}
        </CardSlider>
      </div>
      <div className={ListCardStyle.cardSection}>
        <div className={ListCardStyle.title}>최근에 만든 롤링 페이퍼 ⭐️️</div>
        <CardSlider itemsPerPage={4}>
          {recentList?.results?.map((v) => (
            <CardList data={v} />
          ))}
        </CardSlider>
      </div>
      <div className={ListCardStyle.buttonBox}>
        <Button className={ListCardStyle.button} buttonType="primary56" onClick={handleMoveLink}>
          <p>나도 만들어보기</p>
        </Button>
      </div>
    </div>
  );
}

export default ListPage;
