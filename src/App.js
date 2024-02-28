import LeftArrowButton from 'components/ArrowButton/LeftArrowButton';
import './App.scss';
import RightArrowButton from 'components/ArrowButton/RightArrowButton';
import PlusButton from 'components/PlusButton/PlusButton';
import ToggleButton from 'components/ToggleButton/ToggleButton';
import TrashButton from 'components/TrashButton/TrashButton';

function App() {
  return (
    <>
      <LeftArrowButton />
      <RightArrowButton />
      <ToggleButton />
      <PlusButton buttonState="enabled" />
      <TrashButton buttonState="enabled" />
    </>
  );
}

export default App;
