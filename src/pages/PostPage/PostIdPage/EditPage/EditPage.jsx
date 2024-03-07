import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useDeleteRecipient from 'hooks/useDeleteRecipient';
import useGetMessageList from 'hooks/useGetMessageList';
import useGetRecipient from 'hooks/useGetRecipient';
import useModal from 'hooks/useModal';

import Button from 'components/Button/Button';
// eslint-disable-next-line import/no-cycle
import HeaderLayout from 'components/Header/HeaderLayout';
import Card from 'components/card/card';

import { modalList } from 'contexts/ModalComponent';

import styles from 'pages/PostPage/PostIdPage/EditPage/EditPage.module.scss';

export const UserContext = React.createContext();
function EditPage() {
  const { id } = useParams();
  const { data: recipientInfo } = useGetRecipient({ id });
  const { openModal } = useModal();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [exportData, setExportData] = useState([]);
  const { data, getMessageList } = useGetMessageList({ id, limit: 20 });
  const { backgroundColor } = recipientInfo;
  const { backgroundImageURL } = recipientInfo;
  const { deleteRecipient } = useDeleteRecipient();
  const [isDeleted, setIsDeleted] = useState(false);
  const cardClassName = classNames(styles.cardListOverContainer, styles[backgroundColor]);

  const handleDelete = () => {
    setIsDeleted(!isDeleted);
  };

  const handleDeleteClick = () => {
    deleteRecipient({ id });
    navigate(`/list`);
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
    getMessageList();
  }, [isDeleted]);

  useEffect(() => {
    if (data) {
      setExportData(data.results);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <UserContext.Provider value={isDeleted}>
        <HeaderLayout postId={id} />
      </UserContext.Provider>
      <div className={styles.heightCover} />
      <div
        style={{
          background: backgroundImageURL && `url(${backgroundImageURL}) no-repeat center fixed`,
          backgroundSize: backgroundImageURL && 'cover',
        }}
        className={cardClassName}
      >
        <div className={styles.cardListContainer}>
          <div className={styles.cardList}>
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
                  onDelete={handleDelete}
                />
              ))
            )}
            <Button className={styles.editButton} buttonType="primary40" onClick={handleDeleteClick}>
              <p>삭제하기</p>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPage;
