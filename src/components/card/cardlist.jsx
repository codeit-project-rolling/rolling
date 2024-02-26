/* eslint-disable react/prop-types */

import React from 'react';

import { cardBackgroundSvg, backGroundThemaSwith } from './cardUtils';
import CardListStyle from './cardlist.module.scss';
import CardListDumpData from './dump.data';

// import cardImg from './망곰1.jpg';

function CardList({ data }) {
  return (
    <div
      className={[CardListStyle.container, CardListStyle[data?.backgroundColor]].join(' ')}
      style={backGroundThemaSwith(data)}
    >
      {!data?.backgroundImageURL ? (
        <div className={CardListStyle.card_background}>{cardBackgroundSvg(data?.backgroundColor)}</div>
      ) : null}

      <div className={CardListStyle.card}>
        <div className={CardListStyle.name}>To. {data?.name}</div>
        <div className={CardListStyle.imagelist}>
          {data?.recentMessages?.slice(0, 3).map((v, i) => (
            <img src={v.profileImageURL} alt="" style={{ left: `${i * 12}px` }} />
          ))}
          {data?.recentMessages?.length > 3 ? (
            <div className={CardListStyle.image_count}>+{data.recentMessages.length - 3}</div>
          ) : null}
        </div>
        <div className={CardListStyle.message_count}>
          <p>{data?.messageCount}</p>명이 작성했어요!
        </div>
      </div>
      <div className={CardListStyle.badge_emoji_list}>
        {data?.topReactions?.slice(0, 3)?.map((v) => (
          <div className={CardListStyle.badge_emoji_box}>
            <div className={CardListStyle.badge_emoji}>{`${v.emoji} ${v.count}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DemoCard() {
  return <CardList data={CardListDumpData} />;
}

export default CardList;
