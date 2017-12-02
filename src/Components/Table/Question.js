import React from 'react';
import PropTypes from 'prop-types';
import toString from 'lodash/toString';

const propTypes = {
  children: PropTypes.string.isRequired,
};

const Question = ({ children }) => (
  <div>
    {toString(children).replace(/\{[0-9]?\}/g, '________')}
  </div>
);

Question.propTypes = propTypes;

export default Question;
