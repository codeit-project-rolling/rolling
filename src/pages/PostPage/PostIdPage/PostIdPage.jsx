import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useGetMessageList from 'hooks/useGetMessageList';
import useGetRecipient from 'hooks/useGetRecipient';
import useModal from 'hooks/useModal';

// eslint-disable-next-line import/order
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
  const { recipientInfo } = useGetRecipient({ id });
  const { openModal } = useModal();
  const buttonAndCardCombinedClass = classNames(styles.basicButton, styles.card);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [exportData, setExportData] = useState([]);
  const { data } = useGetMessageList({ id, limit: 20 });
  const [showToast, setShowToast] = useState(false);

  const { backgroundColor } = recipientInfo;
  const { backgroundImageURL } = recipientInfo;

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
    if (data) {
      setExportData(data.results);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <UserContext.Provider value={handleUrlClick}>
        <HeaderLayout postId={id} />
      </UserContext.Provider>
      <div className={styles.heightCover} />
      <div
        style={{
          backgroundColor: backgroundColor || 'transparent',
          background: `url(${backgroundImageURL}) no-repeat center fixed`,
          backgroundSize: 'cover',
        }}
        className={styles.cardListContainer}
      >
        <div className={styles.cardList}>
          <div className={buttonAndCardCombinedClass}>
            <PlusButton onClick={handleClick} />
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            exportData?.map((item) => (
              <Card onClick={() => handleCardClick(item)} className={styles.card} key={item.id} data={item} />
            ))
          )}
          <Button className={styles.editButton} buttonType="primary40" onClick={handleEditClick}>
            <p>편집하기</p>
          </Button>
        </div>
        <div className={styles.toast}>{showToast && <Toast onClick={handleUrlClick} />}</div>
      </div>
    </>
  );
}

export default PostIdPage;
