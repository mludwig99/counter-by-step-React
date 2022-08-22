import './App.css';
import Counter from './Counter';
import StepFunctional from './Step';


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1 className='App-title'>App Counter in  ReactaJS</h1>
      </header>
      <Counter initValue={55} />
      
    </div>
  );
}

export default App;
