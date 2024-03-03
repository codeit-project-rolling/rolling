import React from 'react';

import shareModalStyles from 'components/Header/HeaderComponents/ShareDropdown.module.scss';

// eslint-disable-next-line import/no-cycle
import { UserContext } from 'pages/PostPage/PostIdPage/PostIdPage';

function ShareDropdown() {
  const value = React.useContext(UserContext);
  return (
    <div className={shareModalStyles.shareModalContainer}>
      <button type="button" className={shareModalStyles.shareKakao}>
        카카오톡 공유
      </button>
      <button type="button" onClick={value} className={shareModalStyles.shareUrl}>
        URL 공유
      </button>
    </div>
  );
}

export default ShareDropdown;
