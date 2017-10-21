import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startup } from '../../Actions/TableActions';

import './Table.css';

const propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    username: PropTypes.string,
  })).isRequired,
  startup: PropTypes.func.isRequired,
};

class Table extends Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    return (
      <div className="table">
        {this.props.players.map(p => <span>{p.username} {!p.ready && 'not'} ready</span>)}
      </div>
    );
  }
}

Table.propTypes = propTypes;

const mapStateToProps = state => ({
  players: state.table.players,
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);
