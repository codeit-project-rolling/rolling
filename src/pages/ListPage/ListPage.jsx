/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

// import { useEffect, useState } from 'react';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useGetRecipientList from 'hooks/useGetRecipientList';

import Button from 'components/Button/Button';
import Header from 'components/Header/HeaderComponents/Header';
import SideBar from 'components/SideBar/SideBar';
import CardSlider from 'components/Slider/CardSlider';
import CardSkeleton from 'components/Slider/Skeleton';
import CardList from 'components/card/cardlist';

import ListCardStyle from './ListPage.module.scss';

function ListPage() {
  // const [isOpen, setIsOpen] = useState(false);
  const { data: likeList, loading } = useGetRecipientList({
    sortByLike: true,
  });
  const { loading: recentLoding, data: recentList } = useGetRecipientList();
  const navigate = useNavigate();

  const handleMoveLink = () => {
    // e.stopPropagation();
    navigate('/post');
  };

  // const handeltoggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className={ListCardStyle.container}>
      <Header />
      <div className={ListCardStyle.cardSection}>
        <div className={ListCardStyle.title}>인기 롤링 페이퍼 🔥</div>
        {loading ? (
          <CardSkeleton data={4} />
        ) : (
          <CardSlider itemsPerPage={4}>
            {likeList?.results?.map((v) => (
              <CardList data={v} stopPropagation key={v.id} />
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
              <CardList data={v} key={v.id} stopPropagation />
            ))}
          </CardSlider>
        )}
      </div>

      <div className={ListCardStyle.buttonBox}>
        <Button className={ListCardStyle.button} buttonType="primary56" onClick={handleMoveLink}>
          <p>나도 만들어보기</p>
        </Button>
      </div>
      {/*
      <div className={ListCardStyle.serchButton} onClick={() => handeltoggleMenu()}>
        검색버튼
      </div>
       <div className={isOpen ? ListCardStyle.serchBoxOpen : ListCardStyle.serchBox}>
        
        <div className={isOpen ? ListCardStyle.contentOpen : ListCardStyle.content}>
          <div className={ListCardStyle.serchBar}>검색창</div>
          <div>카드정보 보이기</div>
        </div>
      </div> */}
      <SideBar />
    </div>
  );
}

export default ListPage;
