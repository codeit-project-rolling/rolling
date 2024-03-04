import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useGetMessageList from 'hooks/useGetMessageList';
import useModal from 'hooks/useModal';

import Button from 'components/Button/Button';
// eslint-disable-next-line import/no-cycle
import HeaderLayout from 'components/Header/HeaderLayout';
import PlusButton from 'components/PlusButton/PlusButton';
import Card from 'components/card/card';

import { modalList } from 'contexts/ModalComponent';

import styles from 'pages/PostPage/PostIdPage/EditPage/EditPage.module.scss';

function EditPage() {
  const { id } = useParams();
  const { openModal } = useModal();
  const buttonAndCardCombinedClass = classNames(styles.basicButton, styles.card);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [exportData, setExportData] = useState([]);
  const { data } = useGetMessageList({ id });

  const handleClick = () => {
    navigate(`/post/${id}/message`);
  };

  const handleDeleteClick = () => {
    console.log('삭제');
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
            exportData?.map((item) => (
              <Card
                showDeleteIcon
                onClick={() => handleCardClick(item)}
                className={styles.card}
                key={item.id}
                data={item}
              />
            ))
          )}
          <Button className={styles.editButton} buttonType="primary40" onClick={handleDeleteClick}>
            <p>삭제하기</p>
          </Button>
        </div>
      </div>
    </>
  );
}

export default EditPage;
