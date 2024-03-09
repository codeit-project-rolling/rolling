import PropTypes from 'prop-types';
import React from 'react';

import deleteIcon from 'assets/images/deletedIcon.svg';

// import { useState } from 'react';
import useDeleteMessage from 'hooks/useDeleteMessage';

import Badge from 'components/Badge/Badge';
import Button from 'components/Button/Button';

import formatDate from 'utils/formatDate';

import CardStyle from './card.module.scss';

function Card({ data, showDeleteIcon, onClick, onDelete }) {
  const fontList = {
    'Noto Sans': 'Noto Sans',
    Pretendard: 'Pretendard',
    나눔명조: 'Nanum Myeongjo',
    '나눔손글씨 손편지체': 'Handletter',
  };

  const { deleteMessage } = useDeleteMessage();

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    await deleteMessage({ id: data.id });
    onDelete();
  };

  return (
    <div className={CardStyle.container}>
      <button type="button" className={CardStyle.content} onClick={onClick}>
        <div className={CardStyle.profileBox}>
          <div className={CardStyle.profile}>
            <img src={data?.profileImageURL} alt={`${data?.sender} 이미지`} />
            <div className={CardStyle.profile_detail}>
              <div className={CardStyle.profile_name}>
                From. <p>{data?.sender}</p>
              </div>
              <Badge relationship={data?.relationship} />
            </div>
          </div>
        </div>

        <div className={CardStyle.text_box}>
          <div style={{ fontFamily: fontList[data?.font] }} className={CardStyle.text}>
            {data?.content}
          </div>
          <div className={CardStyle.text_date}>{formatDate(data?.createdAt)}</div>
        </div>
      </button>
      {showDeleteIcon && (
        <Button className={CardStyle.deleteIcon} buttonType="outlined36" onClick={handleDeleteClick}>
          <img src={deleteIcon} alt="휴지통 이미지" />
        </Button>
      )}
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    profileImageURL: PropTypes.string,
    sender: PropTypes.string,
    relationship: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    font: PropTypes.string,
  }),
  showDeleteIcon: PropTypes.bool,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

Card.defaultProps = {
  data: PropTypes.shape({
    id: 0,
    profileImageURL: '',
    sender: '',
    relationship: '',
    content: '',
    createdAt: '',
    font: '',
  }),
  showDeleteIcon: false,
  onClick: null,
  onDelete: null,
};

export default Card;
