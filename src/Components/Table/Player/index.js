import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import ReadyIndicator from './ReadyIndicator'

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  fontSize: 22,
})

const propTypes = {
  username: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
  hasPlay: PropTypes.bool.isRequired,
}

const Question = ({ username, ready, hasPlay }) => (
  <Container>
    <ReadyIndicator isReady={ready} /> {username} {hasPlay && '✔'}
  </Container>
)

Question.propTypes = propTypes

export default Question
