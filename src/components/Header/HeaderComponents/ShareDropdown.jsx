import React from 'react';

import shareModalStyles from 'components/Header/HeaderComponents/ShareDropdown.module.scss';

// eslint-disable-next-line import/no-cycle
import { UserDeleteContext } from 'pages/PostPage/PostIdPage/EditPage/EditPage';
import { UserContext } from 'pages/PostPage/PostIdPage/PostIdPage';

function ShareDropdown() {
  const editValue = React.useContext(UserContext);
  const deleteValue = React.useContext(UserDeleteContext);
  return (
    <div className={shareModalStyles.shareModalContainer}>
      <button type="button" className={shareModalStyles.shareKakao}>
        카카오톡 공유
      </button>
      <button type="button" onClick={(editValue, deleteValue)} className={shareModalStyles.shareUrl}>
        URL 공유
      </button>
    </div>
  );
}

export default ShareDropdown;
