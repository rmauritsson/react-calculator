import React from 'react';
import PropType from 'prop-types';

class Button extends React.Component {
  handleClick = buttonName => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  };

  render() {
    const { name = '', color = '', wide = false } = this.props;

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
  name: PropType.string,
  color: PropType.string,
  wide: PropType.bool,
  clickHandler: PropType.func.isRequired,
};

Button.defaultProps = {
  name: '',
  color: '',
  wide: false,
};

export default Button;
