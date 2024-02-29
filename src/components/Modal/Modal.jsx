import PropTypes from 'prop-types';

import Badge from 'components/Badge/Badge';
import styles from 'components/Modal/Modal.module.scss';

import formatDate from 'utils/formatDate';

// ReactModal 적용 예정
// 부모 요소로부터 onClick 이벤트 받아오기
// message: api로부터 받아오는 객체
// message = {id, recipientId, sender, profileImageURL, relationship, content, font, createdAt}
function Modal({ message /* , onClick */ }) {
  const { sender, profileImageURL, relationship, content, createdAt } = message;

  const createDate = formatDate(createdAt);

  return (
    <div className={styles.modal}>
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
      <div>버튼 컴포넌트를 넣어주세요</div>
    </div>
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