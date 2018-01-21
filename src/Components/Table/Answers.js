import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import Question from 'Components/Table/Question'

const Div = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: '#ffffff',
  fontSize: 24,
})

const propTypes = {
  children: PropTypes.string.isRequired,
}

const Answers = ({ question, answers }) => (
  <Div>
    <Question>{question}</Question>
    <div>
      {answers.map((answer, index) => (
        <div key={index}>● {answer.join(' / ')}</div>
      ))}
    </div>
  </Div>
)

Answers.propTypes = propTypes

export default Answers
