import { ReactComponent as Icon } from 'assets/images/smile.svg';

import Button from 'components/Button/Button';
import './App.scss';

function App() {
  const handleClick = () => {
    console.log(1);
  };
  return (
    <div className="App">
      <Button buttonType="outlined40" onClick={handleClick}>
        <p>111</p>
        <Icon fill="black" />
      </Button>
    </div>
  );
}

export default App;
