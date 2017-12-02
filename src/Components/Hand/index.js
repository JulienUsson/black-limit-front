import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';

import { gameStartedSelector } from 'Selectors';
import { startup } from 'Actions/HandActions';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

const Container = glamorous.div({
  backgroundColor: '#000000',
  height: '100%',
  color: '#ffffff',
});

const propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  startup: PropTypes.func.isRequired,
};

class Hand extends Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    const { gameStarted } = this.props;
    return (
      <Container>
        {gameStarted ? <GameScreen /> : <StartScreen />}
      </Container>
    );
  }
}

Hand.propTypes = propTypes;

const mapStateToProps = state => ({
  gameStarted: gameStartedSelector(state),
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hand);
