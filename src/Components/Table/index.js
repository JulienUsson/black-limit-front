import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { connect } from 'react-redux';

import { startup } from '../../Actions/TableActions';
import Question from './Question';
import Player from './Player';

const RootContainer = glamorous.div({
  backgroundColor: '#000000',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
});

const QuestionContainer = glamorous.div({
  display: 'flex',
  flex: 1,
});

const Players = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-around',
});

const propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
  question: PropTypes.string.isRequired,
  startup: PropTypes.func.isRequired,
};

class Table extends Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    const { players, question } = this.props;
    return (
      <RootContainer>
        <QuestionContainer>
          <Question>{question}</Question>
        </QuestionContainer>
        <Players>
          {players.map(p => <Player key={p.username} {...p} />)}
        </Players>
      </RootContainer>
    );
  }
}

Table.propTypes = propTypes;

const mapStateToProps = state => ({
  players: state.table.players,
  question: state.table.question,
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);
