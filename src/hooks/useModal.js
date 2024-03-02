import { useContext } from 'react';

import { ModalDispatchContext } from 'contexts/ModalContext';

export default function useModal() {
  const { open, close } = useContext(ModalDispatchContext);

  // 모달 열기
  const openModal = (SelectedModal, propList) => {
    open(SelectedModal, propList);
  };

  // 모달 닫기
  const closeModal = () => {
    close();
  };

  return { openModal, closeModal };
}
