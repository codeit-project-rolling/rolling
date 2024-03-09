import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useGetMessageList from 'hooks/useGetMessageList';
import useGetRecipient from 'hooks/useGetRecipient';
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
  const limit = 6;
  const [offset, setOffset] = useState(0);
  const { id } = useParams();
  const { data: recipientInfo } = useGetRecipient({ id });
  const { getMessageList, data: messageList, loading } = useGetMessageList({ id, limit, offset });
  const [showToast, setShowToast] = useState(false);
  const { openModal } = useModal();
  const navigate = useNavigate();

  // 무한 스크롤
  const hasMoreMessageListRef = useRef(true); // 아직 불러오지 않은 메세지가 있는지 여부

  const loadMoreMessageList = useCallback(() => {
    // console.log(`... loadMoreMessageList`);
    setOffset((prevOffset) => {
      // console.log(`... setOffset`);
      if (!hasMoreMessageListRef.current) return prevOffset;
      return prevOffset + limit;
    });
  }, [limit, hasMoreMessageListRef]);

  const setObservationTarget = useIntersectionObserver(loadMoreMessageList);

  // 데이터 저장할 배열
  const [loadedMessageList, setLoadedMessageList] = useState([]);

  const { backgroundColor } = recipientInfo;
  const { backgroundImageURL } = recipientInfo;

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const handleUrlClick = () => {
    const link = `https://rolling-ryu-ji-youngs-projects.vercel.app/post/${id}`;
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
    // console.log(`!!! useEffect -> offset = ${offset} loading = ${loading}`);
    // console.log('    messageList', messageList?.results);
    // console.log('    loadedMessageList', loadedMessageList);
    if (!loading && messageList) {
      getMessageList();
      const nextMessageList = messageList?.results ?? [];
      const maxMessageListCount = messageList?.count ?? 0;

      // console.log('    nextMessageList', nextMessageList);

      // 새로운 메시지 리스트를 기존 메시지 리스트에 추가합니다.
      const updatedMessageList = [...loadedMessageList, ...nextMessageList];
      // console.log(`setLoadedMessageList(updatedMessageList)`);
      setLoadedMessageList(updatedMessageList);

      // 만약 더 불러올 메시지가 없다면 (즉, 로드된 메시지 수가 최대 메시지 수에 도달하거나, 마지막 로딩에서 메시지 수가 limit보다 적은 경우)
      // hasMoreMessageList를 false로 설정하여 더 이상 메시지를 로드하지 않습니다.
      if (
        (hasMoreMessageListRef.current && updatedMessageList.length >= maxMessageListCount) ||
        nextMessageList.length < limit
      ) {
        // console.log(`hasMoreMessageList.current = false`);
        hasMoreMessageListRef.current = false;
      }
    }
  }, [offset]);

  // ClassNames
  const cardClassName = classNames(styles.cardListOverContainer, styles[backgroundColor]);
  const buttonAndCardCombinedClass = classNames(styles.basicButton, styles.card);

  return (
    <>
      <UserContext.Provider value={handleUrlClick}>
        <HeaderLayout postId={id} displayService />
      </UserContext.Provider>
      <div
        style={{
          background: backgroundImageURL && `url(${backgroundImageURL}) no-repeat center fixed`,
          backgroundSize: backgroundImageURL && 'cover',
        }}
        className={cardClassName}
      >
        <div className={styles.contentContainer}>
          <Button className={styles.editButtonDesktop} buttonType="primary40" onClick={handleEditClick}>
            <p>편집하기</p>
          </Button>
          <Button className={styles.editButton} buttonType="primary56" onClick={handleEditClick}>
            <p>편집하기</p>
          </Button>
          <div className={styles.cardList}>
            <div className={buttonAndCardCombinedClass}>
              <PlusButton onClick={handleClick} />
            </div>
            {loadedMessageList?.map((item) => (
              <Card onClick={() => handleCardClick(item)} className={styles.card} key={item.id} data={item} />
            ))}
            {loading && <div>Loading...</div>}
          </div>
          {/* 옵저버에 등록될 엔트리 */}
          {!loading && <div style={{ height: `1rem` }} ref={setObservationTarget} />}
          <div className={styles.toast}>{showToast && <Toast onClick={handleUrlClick} />}</div>
        </div>
      </div>
    </>
  );
}

export default PostIdPage;
