import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  };

  render() {
    return (
      <div className="button-panel">
        <div className="row">
          <Button clickHandler={this.handleClick} name="AC" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="+/-" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="%" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="÷" />
        </div>

        <div className="row">
          <Button clickHandler={this.handleClick} name="7" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="8" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="9" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="X" />
        </div>

        <div className="row">
          <Button clickHandler={this.handleClick} name="4" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="5" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="6" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="-" />
        </div>

        <div className="row">
          <Button clickHandler={this.handleClick} name="1" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="2" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="3" color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="+" />
        </div>

        <div className="row">
          <Button clickHandler={this.handleClick} name="0" color="#e0e0e0" wide="true" />
          <Button clickHandler={this.handleClick} name="." color="#e0e0e0" />
          <Button clickHandler={this.handleClick} name="=" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
