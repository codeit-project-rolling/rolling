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
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  message: {
    sender: '',
    profileImageURL: '',
    relationship: '',
    content: '',
    createdAt: '',
  },
  onClose: null,
};

export default Modal;
