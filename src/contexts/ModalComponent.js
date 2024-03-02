/* eslint-disable react/jsx-props-no-spreading */
import loadable from '@loadable/component';
import { useContext } from 'react';

import { ModalDispatchContext, ModalStateContext } from './ModalContext';

// 전체 모달 리스트 import
export const modalList = {
  Modal: loadable(() => import('components/Modal/Modal')),
};

// 다른 곳에서 불러올 모달 컴포넌트를 반환하는 함수
export default function ModalComponent() {
  // ModalProvider에서 .Provider로 전달한 값 받아오기
  const openedModal = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  if (!openedModal) return null;

  const { SelectedModal, propList } = openedModal;
  const { onSubmit, ...restPropList } = propList;

  const onClose = () => {
    close(SelectedModal);
  };

  // onSubmit -> 동기/비동기 여부를 모르기 때문에 비동기로 처리
  const handleSubmit = async () => {
    // onSubmit이 없는 경우 예외 처리
    if (propList?.onSubmit) {
      await onSubmit();
    }

    onClose();
  };

  return <SelectedModal {...restPropList} onClose={onClose} onSubmit={handleSubmit} />;
}
