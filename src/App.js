// import { ReactComponent as Icon } from 'assets/images/smile.svg';

import Button from 'components/Button/Button';
import './App.scss';

function App() {
  const handleClick = () => {
    console.log(1);
  };
  return (
    <div className="App">
      <Button buttonType="outlined28" onClick={handleClick}>
        <p>enabled</p>

        {/* <Icon fill="black" />
        <p>enabled</p> */}
      </Button>
    </div>
  );
}

export default App;
