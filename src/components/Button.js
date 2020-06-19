import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  isOperator = value => !Number.isNaN(Number(value)) || value === 'AC' || value === '+/-' || value === '%' || value === '.' || value === 'C'

  render() {
    const { children } = this.props;

    let buttonClasses = 'btn btn-outline-secondary button ';
    buttonClasses += this.isOperator(children) ? '' : 'operator';

    return (
      <button type="button" className={buttonClasses}>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
