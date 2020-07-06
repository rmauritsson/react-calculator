import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <div>
        <Display />
      </div>
      <div>
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
