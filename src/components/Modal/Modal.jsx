import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import Badge from 'components/Badge/Badge';
import Button from 'components/Button/Button';
import styles from 'components/Modal/Modal.module.scss';

import formatDate from 'utils/formatDate';

// message: api로부터 받아오는 객체
// message = {id, recipientId, sender, profileImageURL, relationship, content, font, createdAt}
function Modal({ message, onClose }) {
  const { sender, profileImageURL, relationship, content, createdAt } = message;

  const createDate = formatDate(createdAt);

  // ReactModal 속성 설명
  // _1. isOpen: 모달이 열려있는지 여부를 결정하는 불리언 값입니다. 필수 prop입니다.
  // _2. className: 모달 콘텐츠에 적용할 CSS 클래스입니다.
  // _3. overlayClassName: 모달 오버레이에 적용할 CSS 클래스입니다.
  // _4. onRequestClose: 모달을 닫으려는 요청이 있을 때 실행될 콜백 함수입니다. 예를 들어, 오버레이 클릭이나 키보드 ESC 키 입력 등이 있습니다.
  // _5. shouldCloseOnOverlayClick: 오버레이를 클릭했을 때 모달을 닫을지 여부를 결정합니다.
  // _6. shouldCloseOnEsc: ESC 키를 눌렀을 때 모달을 닫을지 여부를 결정합니다.
  // _7. parentSelector: 모달을 렌더링할 부모 요소를 선택하는 함수입니다.
  return (
    <ReactModal
      isOpen
      className={styles.modal}
      overlayClassName={styles.overlay}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      parentSelector={() => document.querySelector('#modal-root')}
    >
      <div className={styles.header}>
        <div className={styles.profile}>
          <img className={styles.profileImg} src={profileImageURL} alt="profile-img" />
          <div className={styles.senderContainer}>
            <div className={styles.sender}>
              <p className={styles.senderFrom}>From.</p>
              <p className={styles.senderName}>{sender}</p>
            </div>
            <Badge relationship={relationship} />
          </div>
        </div>
        <p className={styles.createdDate}>{createDate}</p>
      </div>
      <div className={styles.line} />
      <p className={styles.content}>{content}</p>
      <Button className={styles.submitButton} buttonType="primary40" onClick={onClose}>
        <p>확인</p>
      </Button>
    </ReactModal>
  );
}

Modal.propTypes = {
  message: PropTypes.shape({
    sender: PropTypes.string,
    profileImageURL: PropTypes.string,
    relationship: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  message: {
    sender: '',
    profileImageURL: '',
    relationship: '',
    content: '',
    createdAt: '',
  },
};

export default Modal;
