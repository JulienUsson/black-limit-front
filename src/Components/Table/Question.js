import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const Question = ({ children }) => (
  <div>
    {String(children).replace(/\{[0-9]?\}/g, '________')}
  </div>
);

Question.propTypes = propTypes;

export default Question;
