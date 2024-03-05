/* eslint-disable react/prop-types */

import React from 'react';
import { useNavigate } from 'react-router-dom';

import CardListStyle from './Cardlist.module.scss';
import { cardBackgroundSvg, backgroundThemaSwith, backgroundUrlFontColor } from './cardUtils';

function CardList({ data }) {
  const { id } = data;
  const navigate = useNavigate();
  let xDown = null;
  let xUp = null;
  // eslint-disable-next-line prefer-const
  let selectedCardId = null; // 선택된 카드의 ID를 저장하는 변수

  const handleMouseDown = (e) => {
    xDown = e.clientX;
    // console.log('xDown', xDown);
  };

  const handleMouseUP = (e) => {
    xUp = e.clientX;
    // console.log('xUp', xUp);
  };

  const handleMoveLink = () => {
    let xDiff = xDown - xUp;

    if (Math.abs(xDiff) === 0 && id) {
      selectedCardId = id;
      navigate(`/post/${selectedCardId}`);
    } else if (Math.abs(xDiff) > 0) {
      // e.preventDefault();
      return;
    }
    xDown = null;
    xUp = null;
    xDiff = null;
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={[CardListStyle.container, CardListStyle[data?.backgroundColor]].join(' ')}
      key={id}
      id={id}
      style={backgroundThemaSwith(data)}
      onClick={() => handleMoveLink(id)}
      onKeyDown={handleMouseDown}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUP}
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
