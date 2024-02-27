import './App.scss';
import { DumpCard } from 'components/card/card';
import { DemoCard } from 'components/card/cardlist';

function App() {
  return (
    <div className="App">
      <DumpCard />
      <DemoCard />
    </div>
  );
}

export default App;
