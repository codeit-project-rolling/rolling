import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import useGetBackgroundImageList from 'hooks/useGetBackgroundImageList';
import usePostRecipient from 'hooks/usePostRecipient';

import BackColorOption from 'components/BackgroundOption/BackColorOption';
import BackImageOption from 'components/BackgroundOption/BackImageOption';
import Button from 'components/Button/Button';
import HeaderLayout from 'components/Header/HeaderLayout';
import InputText from 'components/Input/InputText';
import ToggleButton from 'components/ToggleButton/ToggleButton';

import styles from 'pages/PostPage/PostPage.module.scss';

function PostPage() {
  const navigate = useNavigate();
  const [recipientName, setRecipientName] = useState(''); // 받는 사람 이름
  const [selectedColor, setSelectedColor] = useState('beige'); // 선택 색상
  const [selectedImageSrc, setSelectedImageSrc] = useState(null); // 이미지 url 기본 null
  // const [backgroundImgList, setBackgroundImgList] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  const [selectedOption, setSelectedOption] = useState('color'); // 토글 기본 옵션 color

  const { postRecipient } = usePostRecipient();
  const postData = { name: recipientName, backgroundColor: selectedColor, backgroundImageURL: selectedImageSrc };
  const handleRecipientNameChange = (event) => {
    setRecipientName(event.target.value);
  };

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const onSelect = (optionValue) => {
    if (selectedOption === 'color') {
      setSelectedColor(optionValue);
    } else {
      setSelectedImageSrc(optionValue);
    }
  };

  // const { data, loading, error } = useGetBackgroundImageList(); // backgroundImgUrl 불러오기
  // useEffect(() => {
  //   if (!loading && !error) {
  //     setBackgroundImgList(data.imageUrls);
  //   }
  // }, [data]);

  const handleCreateButtonClick = async () => {
    const createdId = await postRecipient(postData);
    if (createdId) {
      navigate(`/post/${createdId}`);
    }
  };

  const isInputEmpty = recipientName.trim() === '';
  return (
    <div className={styles.postPageContainer}>
      <div className={styles.headerContainer}>
        <HeaderLayout />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.recipientContainer}>
          <p className={styles.toText}>To.</p>
          <InputText
            inputvalue={recipientName}
            onInputChange={handleRecipientNameChange}
            placeholder="받는 사람 이름을 입력해주세요."
            errormsg="값을 입력해주세요."
            className={styles.recipientNickname}
          />
          <p className={styles.chooseText}>배경화면을 선택해 주세요.</p>
          <p className={styles.whichChooseText}>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          <ToggleButton onSelect={handleToggle} selectedOption={selectedOption} />
          {selectedOption === 'color' ? (
            <BackColorOption onSelect={onSelect} />
          ) : (
            <BackImageOption onSelect={onSelect} />
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
