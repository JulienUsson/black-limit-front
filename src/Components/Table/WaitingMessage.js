import React, { Component } from 'react';
import glamorous, { Span } from 'glamorous';
import times from 'lodash/times';

const Container = glamorous.div({
  color: '#ffffff',
  fontWeight: 700,
  fontSize: 48,
  alignSelf: 'center',
  textAlign: 'center',
});

class WaitingMessage extends Component {
  constructor(props) {
    super(props);
    const count = 0;
    const intervalId = setInterval(this.incCount, 350);
    this.state = { intervalId, count };
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }

  incCount = () => {
    this.setState({
      count: (this.state.count + 1) % 4,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <Container>
        En attente des joueurs
        <div>{times(count, () => '.')}<Span opacity={0}>{times(3 - count, () => '.')}</Span></div>
      </Container>
    );
  }
}

export default WaitingMessage;
