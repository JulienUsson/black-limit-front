import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { startup, setUsername } from '../../Actions/HandActions';

import './Hand.css';

const propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  startup: PropTypes.func.isRequired,
};

class Hand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleUsernameClick = this.handleUsernameClick.bind(this);
  }

  componentDidMount() {
    this.props.startup();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.username !== nextProps.username) {
      this.setState({ username: nextProps.username });
    }
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleUsernameClick() {
    this.props.setUsername(this.state.username);
  }

  render() {
    return (
      <div className="hand">
        <div>username: {this.props.username}</div>
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        <button onClick={this.handleUsernameClick}>Change username</button>
      </div>
    );
  }
}

Hand.propTypes = propTypes;

const mapStateToProps = state => ({
  username: state.hand.username,
});

const mapDispatchToProps = dispatch => ({
  setUsername: username => dispatch(setUsername(username)),
  startup: () => dispatch(startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hand);
