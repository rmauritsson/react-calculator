import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  isOperator = value => !Number.isNaN(Number(value)) || value === 'AC' || value === '+/-' || value === '%' || value === '.' || value === 'C'

  render() {
    const { name, color, wide } = this.props;

    return (
      <button
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
};

export default Button;
