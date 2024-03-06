import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useGetMessageList from 'hooks/useGetMessageList';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useModal from 'hooks/useModal';

import Button from 'components/Button/Button';
// eslint-disable-next-line import/no-cycle
import HeaderLayout from 'components/Header/HeaderLayout';
import PlusButton from 'components/PlusButton/PlusButton';
import Toast from 'components/Toast/Toast';
import Card from 'components/card/card';

import { modalList } from 'contexts/ModalComponent';

import styles from 'pages/PostPage/PostIdPage/PostIdPage.module.scss';

export const UserContext = React.createContext();

function PostIdPage() {
  // 일반
  const limit = 8;
  const [offset, setOffset] = useState(0);
  const { id } = useParams();
  const { data: messageList, loading } = useGetMessageList({ id, limit, offset });
  const [showToast, setShowToast] = useState(false);
  const { openModal } = useModal();
  const navigate = useNavigate();

  // 무한 스크롤
  const loadMoreMessageList = useCallback(() => {
    setOffset((prevOffset) => prevOffset + limit);
  }, [limit]);

  const setObservationTarget = useIntersectionObserver(loadMoreMessageList);

  // 데이터 저장할 배열
  const [loadedMessageList, setLoadedMessageList] = useState([]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const handleUrlClick = () => {
    const link = `http://localhost:3000/post/${id}`;
    navigator.clipboard.writeText(link);
    setShowToast(!showToast);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleClick = () => {
    navigate(`/post/${id}/message`);
  };

  const handleEditClick = () => {
    navigate(`/post/${id}/edit`);
  };

  const handleCardClick = (clickedItem) => {
    openModal(modalList.Modal, {
      onSubmit: null,
      message: {
        sender: clickedItem.sender,
        profileImageURL: clickedItem.profileImageURL,
        relationship: clickedItem.relationship,
        content: clickedItem.content,
        createdAt: clickedItem.createdAt,
      },
    });
  };

  useEffect(() => {
    const currentMessageList = loadedMessageList;
    const nextMessageList = messageList?.results;
    if (nextMessageList) {
      if (!loading) {
        console.log('offset;', offset);
        const allMessageList = [...currentMessageList, ...nextMessageList];
        setLoadedMessageList(allMessageList);
      }
    }
  }, [offset]);

  // ClassNames
  const buttonAndCardCombinedClass = classNames(styles.basicButton, styles.card);

  return (
    <>
      <UserContext.Provider value={handleUrlClick}>
        <HeaderLayout postId={id} />
      </UserContext.Provider>
      <div className={styles.heightCover} />
      <div className={styles.cardListContainer}>
        <div className={styles.cardList}>
          <div className={buttonAndCardCombinedClass}>
            <PlusButton onClick={handleClick} />
          </div>
          {loadedMessageList?.map((item) => (
            <Card onClick={() => handleCardClick(item)} className={styles.card} key={item.id} data={item} />
          ))}
          {loading && <div>Loading...</div>}
          <Button className={styles.editButton} buttonType="secondary40" onClick={handleEditClick}>
            <p>편집하기</p>
          </Button>
        </div>
        {/* 옵저버에 등록될 엔트리 */}
        {!loading && <div ref={setObservationTarget}>옵저버</div>}
        <div className={styles.toast}>{showToast && <Toast onClick={handleUrlClick} />}</div>
      </div>
    </>
  );
}

export default PostIdPage;
