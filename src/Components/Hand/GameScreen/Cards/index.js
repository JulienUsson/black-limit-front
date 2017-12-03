import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import ReactResizeDetector from 'react-resize-detector';
import { blankCountSelector } from 'Selectors';
import Card from './Card';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string).isRequired,
  blankCount: PropTypes.number.isRequired,
};

const Container = glamorous.div({
  flex: 1,
  width: '100%',
});

class Cards extends Component {
  state = {
    offsetWidth: 0,
    selected: [],
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

  onSelect = (selected) => {
    console.log({ bc: this.props.blankCount, selected: this.state.selected.length });
    if (this.state.selected.length === this.props.blankCount) {
      const [, ...values] = this.state.selected;
      this.setState({ selected: [...values, selected] });
    } else {
      this.setState({ selected: [...this.state.selected, selected] });
    }
  }

  onDeselect = (selected) => {
    this.setState({ selected: this.state.selected.filter(s => s !== selected) });
  }

  getStyle = (i) => {
    const { offsetWidth } = this.state;
    const nbCards = this.props.cards.length;
    return ({
      left: (offsetWidth / nbCards) * i,
    });
  }

  render() {
    const { cards } = this.props;
    const { selected } = this.state;
    return (
      <Fragment>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <Container innerRef={(div) => { this.container = div; }}>
          {cards.map((card, i) => (
            <Card key={card} selected={selected.includes(card)} onSelect={this.onSelect} onDeselect={this.onDeselect} {...this.getStyle(i)}>{card}</Card>
        ))}
        </Container>
      </Fragment>
    );
  }
}

Cards.propTypes = propTypes;

const mapStateToProps = state => ({
  cards: state.hand.hand,
  blankCount: blankCountSelector(state),
});

export default connect(mapStateToProps)(Cards);
