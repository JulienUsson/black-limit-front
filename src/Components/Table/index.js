import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startup } from '../../Actions/TableActions';
import Question from './Question';
import './Table.css';

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
      <div className="table">
        {players.map(p => <span key={p.username}>{p.username} {!p.ready && 'not'} ready</span>)}
        <Question>{question}</Question>
      </div>
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
