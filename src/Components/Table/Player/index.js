import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import ReadyIndicator from './ReadyIndicator';

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  fontSize: 22,
});

const propTypes = {
  username: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
};

const Question = ({ username, ready }) => (
  <Container>
    {username} <ReadyIndicator isReady={ready} />
  </Container>
);

Question.propTypes = propTypes;

export default Question;
