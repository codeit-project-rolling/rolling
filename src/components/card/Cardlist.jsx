/* eslint-disable react/prop-types */

import React from 'react';
import { useNavigate } from 'react-router-dom';

import CardListStyle from './Cardlist.module.scss';
import { cardBackgroundSvg, backgroundThemaSwith, backgroundUrlFontColor } from './cardUtils';

function CardList({ data }) {
  const { id } = data;
  const navigate = useNavigate();
  const handleMoveLink = () => {
    navigate(`/post/${id}`);
  };
  console.log('data>>', data);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={[CardListStyle.container, CardListStyle[data?.backgroundColor]].join(' ')}
      style={backgroundThemaSwith(data)}
      onClick={handleMoveLink}
      onKeyDown={handleMoveLink}
    >
      {!data?.backgroundImageURL ? (
        <div className={CardListStyle.card_background}>{cardBackgroundSvg(data?.backgroundColor)}</div>
      ) : null}
      <div className={CardListStyle.card}>
        <div className={CardListStyle.name} style={backgroundUrlFontColor(data)}>
          To. {data?.name}
        </div>
        <div className={CardListStyle.imagelist}>
          {data?.recentMessages?.slice(0, 3).map((v, i) => (
            <img src={v.profileImageURL} alt="" style={{ left: `${i * 12}px` }} />
          ))}
          {data?.recentMessages?.length > 3 ? (
            <div className={CardListStyle.image_count}>+{data.recentMessages.length - 3}</div>
          ) : null}
        </div>
        <div className={CardListStyle.message_count} style={backgroundUrlFontColor(data)}>
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

// export function DemoCard() {
//   return <CardList data={data} />;
// }

export default CardList;
