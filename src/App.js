// import { ReactComponent as Icon } from 'assets/images/share.svg';

import { ReactComponent as Icon } from 'assets/images/smile.svg';

import LeftArrowButton from 'components/ArrowButton/LeftArrowButton';
import RightArrowButton from 'components/ArrowButton/RightArrowButton';
import Button from 'components/Button/Button';
import './App.scss';
import PlusButton from 'components/PlusButton/PlusButton';
import ToggleButton from 'components/ToggleButton/ToggleButton';

// disabled를 작성하면 적용되고 작성하지 않으면 enabled 상태가 적용
function App() {
  const handleButtonClick = () => {
    console.log('버튼 클릭');
  };
  return (
    <>
      <Button buttonType="outlined36" onClick={handleButtonClick}>
        <Icon fill="black" />
        안녕
      </Button>
      <LeftArrowButton onClick={handleButtonClick} />
      <RightArrowButton onClick={handleButtonClick} />
      <PlusButton onClick={handleButtonClick} />
      <ToggleButton onClick={handleButtonClick} />
    </>
  );
}

export default App;
