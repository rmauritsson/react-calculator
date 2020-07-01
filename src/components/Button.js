import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  isOperator = value => !Number.isNaN(Number(value)) || value === 'AC' || value === '+/-' || value === '%' || value === '.' || value === 'C'

  render() {
    const { name } = this.props;

    let buttonClasses = 'btn btn-outline-secondary button ';
    buttonClasses += this.isOperator(name) ? '' : 'operator';

    return (
      <button type="button" className={buttonClasses}>
        { name }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
