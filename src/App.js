import './App.scss';
import { DumpCard } from 'components/card/Card';
import { DemoCard } from 'components/card/Cardlist';

function App() {
  return (
    <div className="App">
      <DumpCard />
      <DemoCard />
    </div>
  );
}

export default App;
