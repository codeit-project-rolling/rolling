import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useGetRecipientList from 'hooks/useGetRecipientList';

import Button from 'components/Button/Button';
import HeaderLayout from 'components/Header/HeaderLayout';
import CardSkeleton from 'components/Slider/CardSkeleton';
import CardSlider from 'components/Slider/CardSlider';
import CardList from 'components/card/cardlist';

import ListCardStyle from './ListPage.module.scss';

function ListPage() {
  const {
    getRecipientList: getRecipientListLike,
    data: likeList,
    loading: likeListLoading,
    error: likeListError,
  } = useGetRecipientList({ sortByLike: true });
  const {
    getRecipientList,
    data: recentList,
    loading: recentListLoding,
    error: recentListError,
  } = useGetRecipientList();
  const navigate = useNavigate();

  const handleMoveLink = () => {
    navigate('/post');
  };

  useEffect(() => {
    if (!likeListLoading && !likeListError) {
      getRecipientListLike();
    }
  }, [likeListLoading, likeListError]);

  useEffect(() => {
    if (!recentListLoding && !recentListError) {
      getRecipientList();
    }
  }, [recentListLoding, recentListError]);

  return (
    <div className={ListCardStyle.container}>
      <HeaderLayout />
      <div className={ListCardStyle.cardSection}>
        <div className={ListCardStyle.title}>인기 롤링 페이퍼 🔥</div>
        {likeListLoading ? (
          <CardSkeleton data={4} />
        ) : (
          <CardSlider itemsPerPage={4}>
            {likeList?.results?.map((v) => (
              <CardList key={v.id} data={v} stopPropagation />
            ))}
          </CardSlider>
        )}
      </div>
      <div className={ListCardStyle.cardSection}>
        <div className={ListCardStyle.title}>최근에 만든 롤링 페이퍼 ⭐️️</div>
        {recentListLoding ? (
          <CardSkeleton data={4} />
        ) : (
          <CardSlider itemsPerPage={4}>
            {recentList?.results?.map((v) => (
              <CardList key={v.id} data={v} stopPropagation />
            ))}
          </CardSlider>
        )}
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
