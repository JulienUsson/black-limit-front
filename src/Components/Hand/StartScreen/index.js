import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous, { Div } from 'glamorous';
import TextField from 'material-ui/TextField';
import CheckBox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';

import { setUsername, setReady } from 'Actions/HandActions';

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50%',
  width: '100%',
});

const Title = glamorous.h2({
  textAlign: 'center',
  fontWeight: 700,
  fontSize: 48,
  margin: 0,
});

const propTypes = {
  username: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
  setUsername: PropTypes.func.isRequired,
  setReady: PropTypes.func.isRequired,
};

class Hand extends Component {
  handleUsernameChange = (event) => {
    this.props.setUsername(event.target.value);
    if (event.target.value.length === 0) {
      this.props.setReady(false);
    }
  }

  handleReadyChange = (event) => {
    if (this.props.username.length > 0) {
      this.props.setReady(event.target.checked);
    }
  }

  render() {
    const { username, ready } = this.props;
    return (
      <Div display="flex" height="100%" justifyContent="center" alignItems="center">
        <Container>
          <Title>Black Limit</Title>
          <Div width={350} display="flex" justifyContent="space-between">
            <TextField value={username} onChange={this.handleUsernameChange} placeholder="Nom" required />
            <FormControlLabel
              control={<CheckBox checked={ready} onChange={this.handleReadyChange} />}
              label="Prêt?"
            />
          </Div>
        </Container>
      </Div>
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
