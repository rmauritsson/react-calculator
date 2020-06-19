import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="board">
      <div className="calc-display">
        <Display />
      </div>
      <div className="calc-info">
        <ButtonPanel />
      </div>
    </div>
  );
}

export default App;
