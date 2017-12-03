import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import ReactResizeDetector from 'react-resize-detector';
import Card from './Card';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Container = glamorous.div({
  flex: 1,
  width: '100%',
});

class Cards extends Component {
  state = {
    offsetWidth: 0,
  }

  componentDidMount() {
    this.onResize();
  }

  onResize = () => {
    if (!this.container) {
      return;
    }
    const { offsetWidth } = this.container;
    this.setState({ offsetWidth });
  }

  getStyle = (i) => {
    const { offsetWidth } = this.state;
    const nbCards = this.props.cards.length;
    return ({
      left: (offsetWidth / nbCards) * i,
      bottom: 0,
      width: '15vw',
      height: '25vw',
    });
  }

  render() {
    const { cards } = this.props;
    return (
      <Fragment>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <Container innerRef={(div) => { this.container = div; }}>
          {cards.map((card, i) => (
            <Card key={card} {...this.getStyle(i)}>{card}</Card>
        ))}
        </Container>
      </Fragment>
    );
  }
}

Cards.propTypes = propTypes;

const mapStateToProps = state => ({
  cards: state.hand.hand,
});

export default connect(mapStateToProps)(Cards);
