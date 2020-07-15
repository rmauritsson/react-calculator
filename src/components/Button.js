import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = buttonName => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  };

  render() {
    const { name, color, wide } = this.props;

    return (
      <button
        onClick={() => this.handleClick(name)}
        type="button"
        className="button"
        style={{
          backgroundColor: color,
          width: wide ? '50%' : '25%',
        }}
      >
        { name }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
