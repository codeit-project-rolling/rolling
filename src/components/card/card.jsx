/* eslint-disable react/prop-types */
import React from 'react';

// import { useState } from 'react';
import CardStyle from './card.module.scss';
import { CardDumpData } from './dump.data';
import cardImg from './망곰1.jpg';

function Card({ data }) {
  // const [a, setA] = useState('');
  return (
    <div className={CardStyle.container}>
      <div className={CardStyle.profile}>
        <img src={cardImg} alt="귀염둥이망곰이" />
        <div className={CardStyle.profile_detail}>
          <div>From. {data?.sender}</div>
          <div>{data?.relationship}(뱃지컴포넌트)</div>
        </div>
      </div>
      <div className={CardStyle.text_box}>
        <div className={CardStyle.text}>{data?.content}</div>
        <div className={CardStyle.text_date}>2024.02.26</div>
      </div>
    </div>
  );
}

export function DumpCard() {
  return <Card data={CardDumpData[0]} />;
}

export default Card;
