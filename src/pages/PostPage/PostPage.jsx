import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useGetBackgroundImageList from 'hooks/useGetBackgroundImageList';
import usePostRecipient from 'hooks/usePostRecipient';

import BackColorOption from 'components/BackgroundOption/BackColorOption';
import BackImageOption from 'components/BackgroundOption/BackImageOption';
import Button from 'components/Button/Button';
import Header from 'components/Header/HeaderComponents/Header';
import ToggleButton from 'components/ToggleButton/ToggleButton';

import styles from 'pages/PostPage/PostPage.module.scss';

function PostPage() {
  const navigate = useNavigate();
  const [recipientName, setRecipientName] = useState(''); // 받는 사람 이름
  const [selectedColor, setSelectedColor] = useState('beige'); // 선택 색상
  const [selectedImageSrc, setSelectedImageSrc] = useState(null); // 이미지 url 기본 null
  const [backgrounImgList, setBackgroundImgList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedOption, setSelectedOption] = useState('color'); // 토글 기본 옵션 color
  const [createdRecipientId, setCreatedRecipientId] = useState(null);

  const { postRecipient } = usePostRecipient();
  const postData = { name: recipientName, backgroundColor: selectedColor, backgroundImageURL: selectedImageSrc };
  const handleRecipientNameChange = (event) => {
    setRecipientName(event.target.value);
  };

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const handleBlur = () => {
    if (!recipientName.trim()) {
      setErrorMsg('받는사람을 입력해 주세요.');
    } else {
      setErrorMsg('');
    }
  };

  const onSelect = (optionValue) => {
    if (selectedOption === 'color') {
      setSelectedColor(optionValue);
    } else {
      setSelectedImageSrc(optionValue);
    }
  };

  const { data, loading, error } = useGetBackgroundImageList(); // backgroundImgUrl 불러오기
  useEffect(() => {
    if (!loading && !error) {
      setBackgroundImgList(data.imageUrls);
    } else {
      console.error(error);
    }
  }, [data]);

  useEffect(() => {
    // createdRecipientId 업데이트될때마다
  }, [createdRecipientId]);
  const handleCreateButtonClick = async () => {
    const createdId = await postRecipient(postData);
    if (createdId) {
      setCreatedRecipientId(createdId);
      navigate(`/post/${createdId}`);
    }
  };

  const isInputEmpty = recipientName.trim() === '';
  return (
    <div className={styles.postPageContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.recipientContainer}>
          <p className={styles.toText}>To.</p>
          <input
            className={styles.recipientNickname}
            placeholder="받는 사람 이름을 입력해주세요. "
            value={recipientName}
            onChange={handleRecipientNameChange}
            onBlur={handleBlur}
          />
          {errorMsg && <p className={styles.error}>{errorMsg}</p>}
          <p className={styles.chooseText}>배경화면을 선택해 주세요.</p>
          <p className={styles.whichChooseText}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          <ToggleButton onSelect={handleToggle} selectedOption={selectedOption} />
          {selectedOption === 'color' ? (
            <BackColorOption onSelect={onSelect} />
          ) : (
            <BackImageOption onSelect={onSelect} backgroundImgList={backgrounImgList} />
          )}

          <Button
            buttonType="primary56"
            className={styles.createBtn}
            disabled={isInputEmpty}
            onClick={handleCreateButtonClick}
          >
            <p>생성하기</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
