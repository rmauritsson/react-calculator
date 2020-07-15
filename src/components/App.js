/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import Calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const { total, next, operation } = this.state;
    const result = Calculate({ total, next, operation }, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display result={total} operator={operation} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
