import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startup, setUsername, setReady } from '../../Actions/HandActions';

import './Hand.css';

const propTypes = {
  username: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setReady: PropTypes.func.isRequired,
  startup: PropTypes.func.isRequired,
};

class Hand extends Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleReadyChange = this.handleReadyChange.bind(this);
  }

  componentDidMount() {
    this.props.startup();
  }

  handleUsernameChange(event) {
    this.props.setUsername(event.target.value);
  }

  handleReadyChange(event) {
    this.props.setReady(event.target.checked);
  }

  render() {
    return (
      <div className="hand">
        <div>username: {this.props.username}</div>
        <input type="text" value={this.props.username} onChange={this.handleUsernameChange} />
        <input type="checkbox" value={this.props.ready} onChange={this.handleReadyChange} />
      </div>
    );
  }
}

Hand.propTypes = propTypes;

const mapStateToProps = state => ({
  username: state.hand.username,
  ready: state.hand.ready,
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(setUsername(username)),
  setReady: ready => dispatch(setReady(ready)),
  startup: () => dispatch(startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hand);
