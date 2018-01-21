import React, { Component } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { connect } from 'react-redux'

import { gameStartedSelector } from 'Selectors'
import { startup } from '../../Actions/TableActions'
import WaitingMessage from './WaitingMessage'
import Question from './Question'
import Answers from './Answers'
import Player from './Player'

const RootContainer = glamorous.div({
  backgroundColor: '#000000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
})

const Container = glamorous.div({
  display: 'flex',
  flex: 1,
})

const Players = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-around',
})

const propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      username: PropTypes.string,
    })
  ).isRequired,
  question: PropTypes.string,
  answers: PropTypes.array,
  startup: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool.isRequired,
}

const defaultProps = {
  question: '',
}

class Table extends Component {
  componentDidMount() {
    this.props.startup()
  }

  renderBody({ question, gameStarted, answers }) {
    if (gameStarted) {
      if (answers) {
        return <Answers question={question} answers={answers} />
      } else {
        return <Question>{question}</Question>
      }
    } else {
      return <WaitingMessage />
    }
  }

  render() {
    const { players } = this.props
    return (
      <RootContainer>
        <Container>{this.renderBody(this.props)}</Container>
        <Players>
          {players.map(p => <Player key={p.username} {...p} />)}
        </Players>
      </RootContainer>
    )
  }
}

Table.propTypes = propTypes

Table.defaultProps = defaultProps

const mapStateToProps = state => ({
  players: state.table.players,
  question: state.table.question,
  answers: state.table.answers,
  gameStarted: gameStartedSelector(state),
})

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
