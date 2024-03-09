import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

import ModalComponent from 'contexts/ModalComponent';
import { ModalDispatchContext, ModalStateContext } from 'contexts/ModalContext';

// 현재 열려있는 모달 상태 관리
// children에 ModalProvider에서 Provider로 전달한 값 공유
export default function ModalProvider({ children }) {
  // 열려있는 모달 저장
  const [openedModal, setOpenedModal] = useState();

  // 모달 열기
  // SelectedModal: 열고싶은 모달 컴포넌트
  // propList: 모달 컴포넌트로 넘겨주는 propList
  const open = (SelectedModal, propList) => {
    if (!SelectedModal) return null;
    if (openedModal) return null;

    const newModal = { SelectedModal, propList };

    return setOpenedModal(newModal);
  };

  // 모달 닫기
  const close = () => {
    setOpenedModal(null);
  };

  // useMemo: {open, close} 객체 저장
  // 저장된 객체는 첫 렌더링될 때 생성, 이후 의존성 배열의 값이 변경될 때 리렌더링 후 재생성
  // 의존성 배열이 []으로 비어있으므로 첫 렌더링 이후 재생성되지 않음
  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalStateContext.Provider value={openedModal}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
        {openedModal && <ModalComponent />}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node,
};

ModalProvider.defaultProps = {
  children: null,
};
