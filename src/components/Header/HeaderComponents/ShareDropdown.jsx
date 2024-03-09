import React, { useEffect } from 'react';

import shareModalStyles from 'components/Header/HeaderComponents/ShareDropdown.module.scss';

// eslint-disable-next-line import/no-cycle
import { UserContext } from 'pages/PostPage/PostIdPage/PostIdPage';

const JS_KEY = process.env.REACT_APP_JS_KEY;

function ShareDropdown() {
  const editValue = React.useContext(UserContext);
  const { Kakao } = window;
  const realUrl = 'https://rolling-ryu-ji-youngs-projects.vercel.app/';
  // 로컬 주소 (localhost 3000 같은거)
  // const resultUrl = window.location.href;
  useEffect(() => {
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(JS_KEY);
    // 잘 적용되면 true 를 뱉는다.
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '롤링페이퍼',
        description: '지인들과 롤링페이퍼를 작성해보세요',
        imageUrl: 'https://ibb.co/8zmcyq6',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <div className={shareModalStyles.shareModalContainer}>
      <button type="button" onClick={shareKakao} className={shareModalStyles.shareKakao}>
        카카오톡 공유
      </button>
      <button type="button" onClick={editValue} className={shareModalStyles.shareUrl}>
        URL 공유
      </button>
    </div>
  );
}

export default ShareDropdown;
