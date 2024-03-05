/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React from 'react';

import deleteIcon from 'assets/images/deletedIcon.svg';

// import { useState } from 'react';
import useDeleteMessage from 'hooks/useDeleteMessage';

import Badge from 'components/Badge/Badge';
import Button from 'components/Button/Button';

import formatDate from 'utils/formatDate';

import CardStyle from './card.module.scss';
import { CardDumpData } from './dump.data';

function Card({ data, showDeleteIcon, className, onClick, onDelete }) {
  const buttonAndCardCombinedClass = classNames(CardStyle.container, className);
  const { deleteMessage } = useDeleteMessage();
  const handleClick = () => {
    onClick();
  };

  const handleDeleteClick = async () => {
    await deleteMessage({ id: data.id });
    onDelete();
  };

  return (
    <div className={buttonAndCardCombinedClass}>
      <button type="button" className={CardStyle.profileBox} onClick={handleClick}>
        <div className={CardStyle.profile}>
          <img src={data?.profileImageURL} alt={`${data?.sender} 이미지`} />
          <div className={CardStyle.profile_detail}>
            <div className={CardStyle.profile_name}>
              From. <p>{data?.sender}</p>
            </div>
            <Badge relationship={data?.relationship} />
          </div>
        </div>
      </button>
      {showDeleteIcon && (
        <Button className={CardStyle.deleteIcon} buttonType="outlined36" onClick={handleDeleteClick}>
          <img src={deleteIcon} alt="휴지통 이미지" />
        </Button>
      )}

      <button type="button" className={CardStyle.text_box} onClick={handleClick}>
        <div className={CardStyle.text}>{data?.content}</div>
        <div className={CardStyle.text_date}>{formatDate(data?.createdAt)}</div>
      </button>
    </div>
  );
}

export function DumpCard() {
  return <Card data={CardDumpData[0]} showDeleteIcon={false} />;
}

export default Card;
