/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import { Children, useRef, useEffect, useState } from 'react';

import LeftArrowButton from 'components/ArrowButton/LeftArrowButton';
import RightArrowButton from 'components/ArrowButton/RightArrowButton';

import Style from './CardSliderStyle.module.scss'; // 스타일 파일 경로 확인 필요

/**
 * Slider
 * 1. children props을 받어온다.
 * 2. updateItemWidth() 함수로 받아온 children의 첫번째 요소의 크기를  itemWidth에 저장시킨다. 저장시키는 이유는 스크롤할때마다 그 넓이만큼 움직이게 하기 위함
 * 3. eventHandlers에 있는 함수들은 태블릿, 모바일, 피시에서의 기능을 동일하기 위해 생성해서 넣어준다.
 * 4. 스크롤할때마다 updateButtonVisibility() 함수가 실행되어서 현재 스크롤이 더 가능한지 여부에 대해서 감지한다.
 * 5. 스크롤이 불가능할때 좌,우 버튼이 사라진다.
 */

function CardSlider({ children }) {
  const childrenArray = Children.toArray(children);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    scrollStartX: 0,
    lastDirection: 0,
  });

  useEffect(() => {
    const updateItemWidth = () => {
      const firstItem = sliderRef.current?.children[0];
      if (firstItem) {
        const style = window.getComputedStyle(firstItem);
        const marginLeft = parseInt(style.marginLeft, 10);
        const marginRight = parseInt(style.marginRight, 10);
        const totalWidth = firstItem.offsetWidth + marginLeft + marginRight;
        setItemWidth(totalWidth);
      } else {
        setItemWidth(0);
      }
    };
    const updateButtonVisibility = () => {
      const isScrollable =
        containerRef.current.scrollWidth - 2 > containerRef.current.scrollLeft + sliderRef.current.offsetWidth;
      setShowRightButton(isScrollable && childrenArray.length > 4);
      setShowLeftButton(containerRef.current.scrollLeft > 2);
    };

    updateItemWidth();
    updateButtonVisibility();
    window.addEventListener('resize', updateItemWidth);
    containerRef.current.addEventListener('scroll', updateButtonVisibility);

    return () => {
      /**
       * 이벤트 리스너를 제거하지않으면 이벤트가 계속 발생하여 리소스 손실이 있어서 제거해야한다.
       */
      window.removeEventListener('resize', updateItemWidth);
      containerRef.current?.removeEventListener('scroll', updateButtonVisibility);
    };
  }, [childrenArray.length]);

  const handleDragStart = (positionX) => {
    setDragState({
      ...dragState,
      isDragging: true,
      startX: positionX,
      scrollStartX: containerRef.current.scrollLeft,
    });
  };

  const handleDragMove = (positionX) => {
    if (!dragState.isDragging) return;
    const moveX = dragState.startX - positionX;
    containerRef.current.scrollLeft = dragState.scrollStartX + moveX;
    setDragState({ ...dragState, lastDirection: moveX });
  };
  /**
   * direction은 좌우 어디로 스크롤이 갔는지의 수치
   * 현재 스크롤포지션은 스크롤이 스크롤되는 컨테이너의 좌우 최소값 (0, scrollWidth)를 넘지않도록
   * 설정하고, direction * itemWidth 카드 넒이만큼 움직인다.
   * @param {*} direction
   * @returns
   */
  const scroll = (direction) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const currentScroll = Math.round(container.scrollLeft);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    // 현재 스크롤 위치와 가장 가까운 아이템 경계까지의 남은 스크롤 거리를 계산
    const remainingScroll = currentScroll % itemWidth;
    let newScrollPosition;
    if (direction > 0) {
      // 오른쪽으로 이동
      newScrollPosition = currentScroll + itemWidth - remainingScroll;
    } else {
      // 왼쪽으로 이동
      newScrollPosition = currentScroll - (remainingScroll === 0 ? itemWidth : remainingScroll);
    }
    // 스크롤 범위를 넘지 않도록 조정
    newScrollPosition = Math.max(0, Math.min(newScrollPosition, maxScrollLeft));

    // 스크롤 실행
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  };
  /**
   * 터치 및, 드래그가 끝나면 scroll함수를 실행하고, dragState를 업데이트한다.
   */
  const handleDragEnd = () => {
    if (dragState.isDragging) {
      scroll(dragState.lastDirection);
      setDragState({ ...dragState, isDragging: false });
    }
  };

  const eventHandlers = {
    onTouchStart: (e) => handleDragStart(e.touches[0].pageX),
    onTouchMove: (e) => handleDragMove(e.touches[0].pageX),
    onTouchEnd: handleDragEnd,
    onMouseDown: (e) => handleDragStart(e.clientX),
    onMouseMove: (e) => handleDragMove(e.clientX),
    onMouseUp: handleDragEnd,
    onMouseLeave: handleDragEnd,
  };

  return (
    <div className={Style.sliderRoot}>
      <div {...eventHandlers} className={Style.sliderWrapper} ref={containerRef}>
        <div className={Style.sliderContainer} ref={sliderRef}>
          {childrenArray.map((item, index) => (
            <div key={`Slider-${index}`} className={Style.sliderItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {showLeftButton && (
        <div className={Style.sliderButtonLeft}>
          <LeftArrowButton onClick={() => scroll(-1)} />
        </div>
      )}
      {showRightButton && (
        <div className={Style.sliderButtonRight}>
          <RightArrowButton onClick={() => scroll(1)} />
        </div>
      )}
    </div>
  );
}

export default CardSlider;
