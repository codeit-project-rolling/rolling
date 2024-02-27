import LeftArrowButton from 'components/ArrowButton/LeftArrowButton';
import './App.scss';
import RightArrowButton from 'components/ArrowButton/RightArrowButton';
import PlusButton from 'components/PlusButton/PlusButton';
import ToggleButton from 'components/ToggleButton/ToggleButton';

function App() {
  return (
    <>
      <LeftArrowButton />
      <RightArrowButton />
      <ToggleButton />
      <PlusButton buttonState="enabled" />
    </>
  );
}

export default App;
