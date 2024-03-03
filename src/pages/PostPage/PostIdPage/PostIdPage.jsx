import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useGetMessageList from 'hooks/useGetMessageList';
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
  const { openModal } = useModal();
  const buttonAndCardCombinedClass = classNames(styles.basicButton, styles.card);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [exportData, setExportData] = useState([]);

  const { data } = useGetMessageList({ id: 3058 });

  const [showToast, setShowToast] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const handleUrlClick = () => {
    const link = 'https://your-shared-link.com';
    navigator.clipboard.writeText(link);
    setShowToast(!showToast);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleClick = () => {
    navigate('/post/3058/message');
  };

  const handleEditClick = () => {
    navigate('/post/3058/edit');
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
        <HeaderLayout />
      </UserContext.Provider>
      <div className={styles.heightCover} />
      <div className={styles.cardListContainer}>
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
