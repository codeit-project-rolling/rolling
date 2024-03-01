import useModal from 'hooks/useModal';

import Button from 'components/Button/Button';

import { modalList } from 'contexts/ModalComponent';

function HomePage() {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(modalList.Modal, { onSubmit: null, message: { sender: '홍길동' } });
  };

  return (
    <div>
      <Button buttonType="primary40" onClick={handleClick}>
        <p>모달</p>
      </Button>
    </div>
  );
}

export default HomePage;
