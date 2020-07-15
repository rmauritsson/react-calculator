import React from 'react';
import PropType from 'prop-types';

const Display = ({ result, operator, next }) => (
  <button type="button" className="display">
    <p>{!result ? 0 : result}</p>
    { operator ? <p>{operator}</p> : null}
    {next ? <p>{next}</p> : null}
  </button>
);

Display.propTypes = {
  result: PropType.string,
  operator: PropType.string,
  next: PropType.string,
};

Display.defaultProps = {
  result: '0',
  operator: '',
  next: '',
};

export default Display;
