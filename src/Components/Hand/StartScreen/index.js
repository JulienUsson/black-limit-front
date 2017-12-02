import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setUsername, setReady } from 'Actions/HandActions';

const propTypes = {
  username: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setReady: PropTypes.func.isRequired,
};

class Hand extends Component {
  handleUsernameChange = (event) => {
    this.props.setUsername(event.target.value);
  }

  handleReadyChange = (event) => {
    this.props.setReady(event.target.checked);
  }

  render() {
    const { username, ready } = this.props;
    return (
      <div>
        <div>username: {username}</div>
        <input type="text" value={username} onChange={this.handleUsernameChange} />
        <input type="checkbox" checked={ready} onChange={this.handleReadyChange} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hand);
