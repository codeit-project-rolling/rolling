import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';

import ModalProvider from 'contexts/ModalProvider';

import App from './App';

import './index.scss';

// 모달이 렌더링되면 #modal-root를 제외한 다른 곳에 상호작용 금지
ReactModal.setAppElement('#modal-root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
