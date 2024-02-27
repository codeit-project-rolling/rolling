/* eslint-disable react/prop-types */
import React from 'react';

import deleteIcon from 'assets/images/deletedIcon.svg';

// import { useState } from 'react';
import CardStyle from './card.module.scss';
import { CardDumpData } from './dump.data';

function Card({ data, showDelteIcon }) {
  return (
    <div className={CardStyle.container}>
      <div className={CardStyle.profileBox}>
        <div className={CardStyle.profile}>
          <img src={data?.profileImageURL} alt={`${data?.sender} 이미지`} />
          <div className={CardStyle.profile_detail}>
            <div className={CardStyle.profile_name}>
              From. <p>{data?.sender}</p>
            </div>
            <div>{data?.relationship}(뱃지컴포넌트)</div>
          </div>
        </div>
        {/* ---휴지통 버튼 온/오프 ---- */}
        {showDelteIcon && (
          <div className={CardStyle.deleteIcon}>
            <img src={deleteIcon} alt="휴지통 이미지" />
          </div>
        )}
      </div>

      <div className={CardStyle.text_box}>
        <div className={CardStyle.text}>{data?.content}</div>
        <div className={CardStyle.text_date}>2024.02.26</div>
      </div>
    </div>
  );
}

export function DumpCard() {
  return <Card data={CardDumpData[0]} showDelteIcon={false} />;
}

export default Card;
