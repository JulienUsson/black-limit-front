import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import toString from 'lodash/toString';

const Div = glamorous.div({
  color: '#ffffff',
  fontWeight: 700,
  fontSize: 48,
  alignSelf: 'center',
});

const propTypes = {
  children: PropTypes.string.isRequired,
};

const Question = ({ children }) => (
  <Div>
    {toString(children).replace(/\{[0-9]?\}/g, '__________')}
  </Div>
);

Question.propTypes = propTypes;

export default Question;
