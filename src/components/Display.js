import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ results = '0' }) => (
  <button type="button" className="display">
    { results }
  </button>
);

Display.propTypes = {
  results: PropTypes.string.isRequired,
};
export default Display;
