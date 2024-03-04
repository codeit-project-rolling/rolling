import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useGetMessageList from 'hooks/useGetMessageList';
import useGetRecipient from 'hooks/useGetRecipient';
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
  const { id } = useParams();
  const { data: recipientInfo } = useGetRecipient({ id });
  const { data: messageList, loading } = useGetMessageList({ id });
  const [showToast, setShowToast] = useState(false);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const buttonAndCardCombinedClass = classNames(styles.basicButton, styles.card);

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
    console.log('getData', recipientInfo);
  }, [recipientInfo]);

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
          {messageList?.results?.map((item) => (
            <Card onClick={() => handleCardClick(item)} className={styles.card} key={item.id} data={item} />
          ))}
          {loading && <div>Loading...</div>}
          <Button className={styles.editButton} buttonType="secondary40" onClick={handleEditClick}>
            <p>편집하기</p>
          </Button>
        </div>
        <div className={styles.toast}>{showToast && <Toast onClick={handleUrlClick} />}</div>
      </div>
    </>
  );
}

export default PostIdPage;
