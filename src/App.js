import Badge from 'components/Badge/Badge';
import './App.scss';

function App() {
  // return (
  //   <div className="App">
  //     <p className="bold14">14bold</p>
  //     <p className="bold28">28bold</p>
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div className="App">
      <Badge relationship="지인" />
      <Badge relationship="동료" />
      <Badge relationship="가족" />
      <Badge relationship="친구" />
    </div>
  );
}

export default App;
