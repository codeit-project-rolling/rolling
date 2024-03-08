import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import usePostMessage from 'hooks/usePostMessage';

import Button from 'components/Button/Button';
import Dropdown from 'components/Dropdown/Dropdown';
import Header from 'components/Header/HeaderComponents/Header';
import InputText from 'components/Input/InputText';
import ProfileImg from 'components/ProfileImg/ProfileImg';
import TextEditor from 'components/TextEditor/TextEditor';

import styles from 'pages/PostPage/PostIdPage/MessagePage/MessagePage.module.scss';

function MessagePage() {
  const { postMessage } = usePostMessage();
  const [profileImageURL, setProfileImageURL] = useState(
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png'
  );
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const relationshipOptions = [
    { id: 1, name: '지인' },
    { id: 2, name: '친구' },
    { id: 3, name: '동료' },
    { id: 4, name: '가족' },
  ];
  const fontOptions = [
    { id: 1, name: 'Noto Sans' },
    { id: 2, name: 'Fira Sans' },
    { id: 3, name: 'Droid Sans' },
    { id: 4, name: 'Oxygen' },
  ];
  const { id } = useParams();
  const [sender, setSender] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setSender(event.target.value);
  };
  const handleRelationshipChange = (data) => {
    setRelationship(data);
  };
  const handleFontChange = (data) => {
    setFont(data);
  };
  const handleProfileImgChange = (data) => {
    setProfileImageURL(data);
  };
  const handleContentChange = (data) => {
    setContent(data);
  };
  const handlebuttonClick = async () => {
    await postMessage({ id, sender, profileImageURL, relationship, content, font });
    navigate(`/post/${id}`);
  };

  return (
    <>
      <Header postId={id} />
      <div className={styles.container}>
        <div className={styles.messageContainer}>
          <div className={styles.contentContainer}>
            <p className={styles.contentTitle}>From.</p>
            <InputText
              onInputChange={handleNameChange}
              inputvalue={sender}
              errormsg="값을 입력해 주세요."
              placeholder="이름을 입력해 주세요."
            />
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.contentTitle}>프로필 이미지</p>
            <ProfileImg onChange={handleProfileImgChange} selectedImgUrl={profileImageURL} />
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.contentTitle}>상대와의 관계</p>
            <Dropdown onChange={handleRelationshipChange} options={relationshipOptions} />
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.contentTitle}>내용을 입력해주세요.</p>
            <TextEditor onContentChange={handleContentChange} />
          </div>
          <div className={styles.contentContainer}>
            <p className={styles.contentTitle}>폰트 선택</p>
            <Dropdown onChange={handleFontChange} options={fontOptions} />
          </div>
          <div className={styles.buttonContainer}>
            {sender && content ? (
              <Button onClick={handlebuttonClick} className={styles.button} buttonType="primary56">
                <p>롤링 페이퍼 만들기</p>
              </Button>
            ) : (
              <Button className={styles.button} buttonType="primary56" disabled>
                <p>롤링 페이퍼 만들기</p>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MessagePage;
