import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ results = '0', operator = '', next = '' }) => (
  <button type="button" className="display">
    { !results ? 0 : results }
    { operator ? { operator } : '' }
    { next ? { next } : '' }
  </button>
);

Display.propTypes = {
  results: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Display;
