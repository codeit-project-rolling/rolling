import { useNavigate } from 'react-router-dom';

import useGetRecipientList from 'hooks/useGetRecipientList';

import Button from 'components/Button/Button';
import HeaderLayout from 'components/Header/HeaderLayout';
import CardSlider from 'components/Slider/CardSlider';
import CardSkeleton from 'components/Slider/Skeleton';
import CardList from 'components/card/cardlist';

import ListCardStyle from './ListPage.module.scss';

function ListPage() {
  const { data: likeList, loading } = useGetRecipientList({
    sortByLike: true,
  });

  const { loading: recentLoding, data: recentList } = useGetRecipientList();
  const navigate = useNavigate();
  const handleMoveLink = () => {
    navigate('/post');
  };

  return (
    <div className={ListCardStyle.container}>
      <HeaderLayout />
      <div className={ListCardStyle.cardSection}>
        <div className={ListCardStyle.title}>인기 롤링 페이퍼 🔥</div>
        {loading ? (
          <CardSkeleton data={4} />
        ) : (
          <CardSlider itemsPerPage={4}>
            {likeList?.results?.map((v) => (
              <CardList data={v} stopPropagation />
            ))}
          </CardSlider>
        )}
      </div>
      <div className={ListCardStyle.cardSection}>
        <div className={ListCardStyle.title}>최근에 만든 롤링 페이퍼 ⭐️️</div>
        {recentLoding ? (
          <CardSkeleton data={4} />
        ) : (
          <CardSlider itemsPerPage={4}>
            {recentList?.results?.map((v) => (
              <CardList data={v} stopPropagation />
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
